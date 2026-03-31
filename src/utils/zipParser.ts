
import JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';

export interface NfeProduct {
  code: string;
  description: string;
  ncm: string;
  cest?: string;
  cfop: string;
  cst?: string;
  csosn?: string;
  origin?: string;
  quantity: number;
  unitValue: number;
  totalValue: number;
  icmsValue?: number;
  icmsStValue?: number;
  ipiValue?: number;
  pisValue?: number;
  cofinsValue?: number;
}

export interface NfeData {
  key: string;
  number: string;
  series: string;
  emissionDate: string;
  type: 'entrada' | 'saída';
  nature: string;
  issuer: {
    cnpj: string;
    name: string;
    uf: string;
    city: string;
  };
  recipient: {
    cnpjCpf: string;
    name: string;
    uf: string;
    city: string;
  };
  products: NfeProduct[];
  totals: {
    totalValue: number;
    icmsBase: number;
    icmsValue: number;
    icmsSt: number;
    fcp: number;
    ipi: number;
    pis: number;
    cofins: number;
    freight: number;
    insurance: number;
    discount: number;
    others: number;
  };
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

export async function processZipFile(file: File): Promise<NfeData[]> {
  const zip = new JSZip();
  const loadedZip = await zip.loadAsync(file);
  const nfeList: NfeData[] = [];
  const processedKeys = new Set<string>();

  for (const [filename, zipEntry] of Object.entries(loadedZip.files)) {
    if (zipEntry.dir || !filename.toLowerCase().endsWith('.xml')) continue;

    try {
      const xmlContent = await zipEntry.async('string');
      const jsonObj = parser.parse(xmlContent);
      
      // Handle both NFe and procNFe structures
      const nfe = jsonObj.nfeProc?.NFe || jsonObj.NFe;
      if (!nfe) continue;

      const infNFe = nfe.infNFe;
      const key = infNFe['@_Id']?.replace('NFe', '') || '';
      
      if (processedKeys.has(key)) continue;

      const ide = infNFe.ide || {};
      const emit = infNFe.emit || {};
      const dest = infNFe.dest || {};
      const det = Array.isArray(infNFe.det) ? infNFe.det : (infNFe.det ? [infNFe.det] : []);
      const total = infNFe.total?.ICMSTot || {};

      const products: NfeProduct[] = det.map((d: any) => {
        const prod = d.prod || {};
        const imposto = d.imposto || {};
        
        // Extract CST/CSOSN and Taxes per product
        let cst = '';
        let csosn = '';
        let origin = '';
        const icms = imposto.ICMS || {};
        const icmsKey = Object.keys(icms)[0];
        const icmsData = icmsKey ? icms[icmsKey] : {};
        cst = String(icmsData.CST || '');
        csosn = String(icmsData.CSOSN || '');
        origin = String(icmsData.orig || '');

        return {
          code: String(prod.cProd || ''),
          description: String(prod.xProd || ''),
          ncm: String(prod.NCM || ''),
          cest: prod.CEST ? String(prod.CEST) : undefined,
          cfop: String(prod.CFOP || ''),
          cst,
          csosn,
          origin,
          quantity: parseFloat(prod.qCom || 0),
          unitValue: parseFloat(prod.vUnCom || 0),
          totalValue: parseFloat(prod.vProd || 0),
          icmsValue: parseFloat(icmsData.vICMS || 0),
          icmsStValue: parseFloat(icmsData.vICMSST || 0),
          ipiValue: parseFloat(imposto.IPI?.IPITrib?.vIPI || 0),
          pisValue: parseFloat(imposto.PIS?.PISAliq?.vPIS || imposto.PIS?.PISOutr?.vPIS || 0),
          cofinsValue: parseFloat(imposto.COFINS?.COFINSAliq?.vCOFINS || imposto.COFINS?.COFINSOutr?.vCOFINS || 0),
        };
      });

      const nfeData: NfeData = {
        key,
        number: String(ide.nNF || ''),
        series: String(ide.serie || ''),
        emissionDate: ide.dhEmi || ide.dEmi || '',
        type: ide.tpNF === 0 ? 'entrada' : 'saída',
        nature: String(ide.natOp || ''),
        issuer: {
          cnpj: String(emit.CNPJ || ''),
          name: String(emit.xNome || ''),
          uf: String(emit.enderEmit?.UF || ''),
          city: String(emit.enderEmit?.xMun || ''),
        },
        recipient: {
          cnpjCpf: String(dest.CNPJ || dest.CPF || ''),
          name: String(dest.xNome || ''),
          uf: String(dest.enderDest?.UF || ''),
          city: String(dest.enderDest?.xMun || ''),
        },
        products,
        totals: {
          totalValue: parseFloat(total.vNF || 0),
          icmsBase: parseFloat(total.vBC || 0),
          icmsValue: parseFloat(total.vICMS || 0),
          icmsSt: parseFloat(total.vST || 0),
          fcp: parseFloat(total.vFCP || 0),
          ipi: parseFloat(total.vIPI || 0),
          pis: parseFloat(total.vPIS || 0),
          cofins: parseFloat(total.vCOFINS || 0),
          freight: parseFloat(total.vFrete || 0),
          insurance: parseFloat(total.vSeg || 0),
          discount: parseFloat(total.vDesc || 0),
          others: parseFloat(total.vOutro || 0),
        },
      };

      nfeList.push(nfeData);
      processedKeys.add(key);
    } catch (err) {
      console.error(`Error parsing ${filename}:`, err);
    }
  }

  return nfeList;
}
