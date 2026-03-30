
export interface NfeProduct {
  itemNumber: string;
  description: string;
  ncm: string;
  cest: string;
  cfop: string;
  cst: string;
  quantity: number;
  unitValue: number;
  totalValue: number;
}

export interface NfeData {
  number: string;
  key: string;
  issuerName: string;
  issuerUf: string;
  recipientName: string;
  recipientUf: string;
  emissionDate: string;
  products: NfeProduct[];
  interstateRate: string;
}

export function parseNfeXml(xmlString: string): NfeData {
  const parser = new DOMParser();
  // Tenta limpar espaços em branco ou caracteres estranhos antes do início do XML
  const cleanedXml = xmlString.trim().replace(/^[^\<]+/, "");
  const xmlDoc = parser.parseFromString(cleanedXml, "text/xml");

  // Verifica se houve erro no parsing básico
  const parserError = xmlDoc.getElementsByTagName("parsererror")[0];
  if (parserError) {
    throw new Error("O arquivo XML parece estar malformado ou corrompido.");
  }

  /**
   * Função auxiliar para encontrar uma tag em qualquer lugar do documento,
   * ignorando namespaces e sendo resiliente a variações de caixa (maiúsculas/minúsculas).
   */
  const findTag = (parent: Element | Document, tagName: string): Element | null => {
    // 1. Tenta busca direta (respeitando o padrão SEFAZ)
    const tags = parent.getElementsByTagName(tagName);
    if (tags.length > 0) return tags[0];

    // 2. Busca ignorando namespaces (ex: nfe:infNFe vira apenas infNFe)
    const allElements = parent.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i].localName === tagName) {
        return allElements[i];
      }
    }

    // 3. Busca insensível a maiúsculas/minúsculas (para arquivos desconfigurados)
    const lowerTagName = tagName.toLowerCase();
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i].localName.toLowerCase() === lowerTagName) {
        return allElements[i];
      }
    }
    
    return null;
  };

  const getVal = (parent: Element | Document | null, tagName: string): string => {
    if (!parent) return "";
    const tag = findTag(parent, tagName);
    return tag?.textContent?.trim() || "";
  };

  // Localiza a tag principal de informações
  const infNfe = findTag(xmlDoc, "infNFe");
  if (!infNfe) {
    throw new Error("Não foi possível localizar a tag <infNFe>. Certifique-se de que este é um XML de NF-e válido.");
  }

  const ide = findTag(infNfe, "ide");
  const emit = findTag(infNfe, "emit");
  const dest = findTag(infNfe, "dest");

  const issuerUf = getVal(emit, "UF");
  const recipientUf = getVal(dest, "UF");

  const products: NfeProduct[] = [];
  // Localiza todos os itens da nota (tag <det>)
  const detElements = Array.from(infNfe.getElementsByTagName("*")).filter(el => el.localName === "det");

  detElements.forEach((det, index) => {
    const prod = findTag(det, "prod");
    const imposto = findTag(det, "imposto");
    
    // Busca exaustiva pelo CST ou CSOSN dentro do grupo de ICMS
    let cst = "";
    if (imposto) {
      const icmsElements = Array.from(imposto.getElementsByTagName("*"));
      const cstTag = icmsElements.find(el => el.localName === "CST" || el.localName === "CSOSN");
      cst = cstTag?.textContent || "";
    }

    if (prod) {
      products.push({
        itemNumber: det.getAttribute("nItem") || (index + 1).toString(),
        description: getVal(prod, "xProd"),
        ncm: getVal(prod, "NCM"),
        cest: getVal(prod, "CEST"),
        cfop: getVal(prod, "CFOP"),
        cst,
        quantity: parseFloat(getVal(prod, "qCom") || "0"),
        unitValue: parseFloat(getVal(prod, "vUnCom") || "0"),
        totalValue: parseFloat(getVal(prod, "vProd") || "0"),
      });
    }
  });

  // Determinação da alíquota interestadual
  let interstateRate = "12";
  
  if (issuerUf !== recipientUf) {
    // Tenta encontrar pICMS em qualquer item da nota
    const allIcmsTags = Array.from(infNfe.getElementsByTagName("*")).filter(el => el.localName === "pICMS");
    if (allIcmsTags.length > 0) {
      interstateRate = allIcmsTags[0].textContent || "12";
    } else {
      // Lógica de fallback baseada em regiões
      const sulSudeste = ["SP", "RJ", "MG", "PR", "SC", "RS"];
      if (sulSudeste.includes(issuerUf) && ["PB"].includes(recipientUf)) {
        interstateRate = "7";
      }
      // Se o primeiro item for importado (CST começando com 1, 2, 3 ou 8), a alíquota é 4%
      if (products.length > 0 && ["1", "2", "3", "8"].includes(products[0].cst[0])) {
        interstateRate = "4";
      }
    }
  }

  return {
    number: getVal(ide, "nNF"),
    key: infNfe.getAttribute("Id")?.replace("NFe", "") || "",
    issuerName: getVal(emit, "xNome"),
    issuerUf,
    recipientName: getVal(dest, "xNome"),
    recipientUf,
    emissionDate: getVal(ide, "dhEmi") || getVal(ide, "dEmi"),
    products,
    interstateRate,
  };
}
