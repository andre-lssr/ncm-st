const autopeçasMva = {
  com_fidelidade: {
    interno: 36.56,
    inter_4: 63.87,
    inter_7: 58.75,
    inter_12: 50.22
  },
  sem_fidelidade: {
    interno: 71.78,
    inter_4: 106.14,
    inter_7: 99.69,
    inter_12: 88.96
  }
};

const bebidasMva = {
  com_fidelidade: {
    interno: 29.04,
    inter_4: 65.17,
    inter_7: 60.01,
    inter_12: 51.41
  },
  sem_fidelidade: {
    interno: 29.04,
    inter_4: 65.17,
    inter_7: 60.01,
    inter_12: 51.41
  }
};

const veiculosMva = {
  com_fidelidade: {
    interno: 30,
    inter_4: 56,
    inter_7: 51.13,
    inter_12: 43
  },
  sem_fidelidade: {
    interno: 30,
    inter_4: 56,
    inter_7: 51.13,
    inter_12: 43
  }
};

const lampadasMva = {
  com_fidelidade: {
    interno: 60.03,
    inter_4: 92.04,
    inter_7: 86.03,
    inter_12: 76.03
  },
  sem_fidelidade: {
    interno: 60.03,
    inter_4: 92.04,
    inter_7: 86.03,
    inter_12: 76.03
  }
};

const motosMva = {
  com_fidelidade: {
    interno: 34,
    inter_4: 60.80,
    inter_7: 55.78,
    inter_12: 47.40
  },
  sem_fidelidade: {
    interno: 34,
    inter_4: 60.80,
    inter_7: 55.78,
    inter_12: 47.40
  }
};

const pneusMva = {
  com_fidelidade: {
    interno: 42,
    inter_4: 70.40,
    inter_7: 65.08,
    inter_12: 56.20
  },
  sem_fidelidade: {
    interno: 42,
    inter_4: 70.40,
    inter_7: 65.08,
    inter_12: 56.20
  }
};

const pneusMotoMva = {
  com_fidelidade: {
    interno: 60,
    inter_4: 92,
    inter_7: 86,
    inter_12: 76
  },
  sem_fidelidade: {
    interno: 60,
    inter_4: 92,
    inter_7: 86,
    inter_12: 76
  }
};

const pneusOutrosMva = {
  com_fidelidade: {
    interno: 45,
    inter_4: 74,
    inter_7: 68.56,
    inter_12: 59.50
  },
  sem_fidelidade: {
    interno: 45,
    inter_4: 74,
    inter_7: 68.56,
    inter_12: 59.50
  }
};

const medPositivaMva = {
  com_fidelidade: {
    interno: 38.24,
    inter_4: 65.89,
    inter_7: 60.70,
    inter_12: 52.06
  },
  sem_fidelidade: {
    interno: 38.24,
    inter_4: 65.89,
    inter_7: 60.70,
    inter_12: 52.06
  }
};

const medNegativaMva = {
  com_fidelidade: {
    interno: 33.05,
    inter_4: 59.66,
    inter_7: 54.67,
    inter_12: 46.36
  },
  sem_fidelidade: {
    interno: 33.05,
    inter_4: 59.66,
    inter_7: 54.67,
    inter_12: 46.36
  }
};

const medNeutraMva = {
  com_fidelidade: {
    interno: 41.34,
    inter_4: 69.61,
    inter_7: 64.31,
    inter_12: 55.47
  },
  sem_fidelidade: {
    interno: 41.34,
    inter_4: 69.61,
    inter_7: 64.31,
    inter_12: 55.47
  }
};

const higienePessoalMva = {
  com_fidelidade: {
    interno: 67.96,
    inter_4: 101.55,
    inter_7: 95.25,
    inter_12: 84.76
  },
  sem_fidelidade: {
    interno: 67.96,
    inter_4: 101.55,
    inter_7: 95.25,
    inter_12: 84.76
  }
};

const alimentos13Mva = {
  com_fidelidade: {
    interno: 13,
    inter_4: 35.60,
    inter_7: 31.38,
    inter_12: 24.34
  },
  sem_fidelidade: {
    interno: 13,
    inter_4: 35.60,
    inter_7: 31.38,
    inter_12: 24.34
  }
};

const alimentos20Mva = {
  com_fidelidade: {
    interno: 20,
    inter_4: 44,
    inter_7: 39.50,
    inter_12: 32
  },
  sem_fidelidade: {
    interno: 20,
    inter_4: 44,
    inter_7: 39.50,
    inter_12: 32
  }
};

const alimentos40Mva = {
  com_fidelidade: {
    interno: 40,
    inter_4: 68,
    inter_7: 62.75,
    inter_12: 54
  },
  sem_fidelidade: {
    interno: 40,
    inter_4: 68,
    inter_7: 62.75,
    inter_12: 54
  }
};

const construcaoMva = {
  com_fidelidade: {
    interno: 40,
    inter_4: 68,
    inter_7: 62.75,
    inter_12: 54
  },
  sem_fidelidade: {
    interno: 40,
    inter_4: 68,
    inter_7: 62.75,
    inter_12: 54
  }
};

const cest03Mva = {
  com_fidelidade: {
    interno: 140,
    inter_4: 140,
    inter_7: 140,
    inter_12: 140
  },
  sem_fidelidade: {
    interno: 140,
    inter_4: 140,
    inter_7: 140,
    inter_12: 140
  }
};

export const anexoV = [
  // CEST 01. Autopeças
  {
    ncm: "3815.12.10",
    cest: "01.006.00",
    descricao: "Catalisadores em colmeia cerâmica ou metálica para conversão catalítica de gases de escape de veículos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "3815.12.90",
    cest: "01.006.00",
    descricao: "Catalisadores em colmeia cerâmica ou metálica para conversão catalítica de gases de escape de veículos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39172100",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39172200",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39172300",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39172900",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173100",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173210",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173221",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173229",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173240",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173251",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173259",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173290",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173300",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39173900",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39174090",
    cest: "01.007.00",
    descricao: "Tubos e seus acessórios (por exemplo: juntas, cotovelos, flanges, uniões), de plásticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "3918.10.00",
    cest: "01.001.00",
    descricao: "Protetores de caçamba",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "3923.30.00",
    cest: "01.002.00",
    descricao: "Reservatórios de óleo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "3926.30.00",
    cest: "01.003.00",
    descricao: "Frisos, decalques, molduras e acabamentos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103100",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103200",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103300",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103400",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103500",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103600",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "40103900",
    cest: "01.004.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5910.00.00",
    cest: "01.005.00",
    descricao: "Correias de transmissão de borracha vulcanizada",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4016.93.00",
    descricao: "Juntas, gaxetas e outros elementos com função semelhante de vedação",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "48239091",
    descricao: "Juntas, gaxetas e outros elementos com função semelhante de vedação",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "48239099",
    descricao: "Juntas, gaxetas e outros elementos com função semelhante de vedação",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4016.10.10",
    cest: "01.008.00",
    descricao: "Partes de veículos automóveis, tratores e máquinas autopropulsadas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4016.99.90",
    cest: "01.009.00",
    descricao: "Tapetes, revestimentos, mesmo confeccionados, batentes, buchas e coxins",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5705.00.00",
    cest: "01.009.00",
    descricao: "Tapetes, revestimentos, mesmo confeccionados, batentes, buchas e coxins",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5903.90.00",
    cest: "01.010.00",
    descricao: "Tecidos impregnados, revestidos, recobertos ou estratificados, com plástico",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5909.00.00",
    cest: "01.011.00",
    descricao: "Mangueiras e tubos semelhantes, de matérias têxteis, mesmo com reforço ou acessórios",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "63061000",
    cest: "01.012.00",
    descricao: "Encerados e toldos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "6506.10.00",
    cest: "01.013.00",
    descricao: "Capacetes e artefatos de uso semelhante, de proteção, para uso em motocicletas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "68132000",
    cest: "01.014.00",
    descricao: "Guarnições de fricção (por exemplo: placas, rolos, tiras, segmentos, discos, anéis, pastilhas)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "68138110",
    cest: "01.014.00",
    descricao: "Guarnições de fricção (por exemplo: placas, rolos, tiras, segmentos, discos, anéis, pastilhas)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "68138190",
    cest: "01.014.00",
    descricao: "Guarnições de fricção (por exemplo: placas, rolos, tiras, segmentos, discos, anéis, pastilhas)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "68138910",
    cest: "01.014.00",
    descricao: "Guarnições de fricção (por exemplo: placas, rolos, tiras, segmentos, discos, anéis, pastilhas)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7007.11.00",
    cest: "01.015.00",
    descricao: "Vidros de dimensões e formatos que permitam aplicação automotiva",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7007.21.00",
    cest: "01.015.00",
    descricao: "Vidros de dimensões e formatos que permitam aplicação automotiva",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7009.10.00",
    cest: "01.016.00",
    descricao: "Espelhos retrovisores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7014.00.00",
    descricao: "Lentes de faróis, lanternas e outros utensílios",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7311.00.00",
    descricao: "Cilindro de aço para GNV (gás natural veicular)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7320",
    descricao: "Molas e folhas de molas, de ferro ou aço",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7325",
    descricao: "Obras moldadas, de ferro fundido, ferro ou aço, exceto as do código 7325.91.00",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7806.00",
    descricao: "Peso de chumbo para balanceamento de roda",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8007.00.90",
    descricao: "Peso para balanceamento de roda e outros utensílios de estanho",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "83012000",
    descricao: "Fechaduras e partes de fechaduras",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "83016000",
    descricao: "Fechaduras e partes de fechaduras",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "83017000",
    descricao: "Chaves apresentadas isoladamente",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8302.10.00",
    descricao: "Dobradiças, guarnições, ferragens e artigos semelhantes de metais comuns",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8302.30.00",
    descricao: "Dobradiças, guarnições, ferragens e artigos semelhantes de metais comuns",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8310.00",
    descricao: "Triângulo de segurança",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8407.3",
    descricao: "Motores de pistão alternativo dos tipos utilizados para propulsão de veículos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8408.20",
    descricao: "Motores dos tipos utilizados para propulsão de veículos automotores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8409.9",
    descricao: "Partes reconhecíveis como exclusiva ou principalmente destinadas aos motores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8412.2",
    descricao: "Motores hidráulicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.30",
    descricao: "Bombas para combustíveis, lubrificantes ou líquidos de arrefecimento",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84149010",
    descricao: "Bombas de vácuo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84149031",
    descricao: "Compressores e turbocompressores de ar",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84149039",
    descricao: "Compressores e turbocompressores de ar",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.91.90",
    descricao: "Partes das bombas, compressores e turbocompressores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84152010",
    descricao: "Máquinas e aparelhos de ar condicionado",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84152090",
    descricao: "Máquinas e aparelhos de ar condicionado",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.23.00",
    descricao: "Aparelhos para filtrar óleos minerais nos motores de ignição",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.29.90",
    descricao: "Filtros a vácuo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.9",
    descricao: "Partes dos aparelhos para filtrar ou depurar líquidos ou gases",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8424.10.00",
    descricao: "Extintores, mesmo carregados",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.31.00",
    descricao: "Filtros de entrada de ar para motores de ignição",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.32.00",
    descricao: "Depuradores por conversão catalítica de gases de escape",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8425.42.00",
    descricao: "Macacos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8431.10.10",
    descricao: "Partes para macacos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8431.49.2",
    descricao: "Partes reconhecíveis como exclusiva ou principalmente destinadas às máquinas agrícolas ou rodoviárias",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8433.90.90",
    descricao: "Partes reconhecíveis como exclusiva ou principalmente destinadas às máquinas agrícolas ou rodoviárias",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8481.10.00",
    descricao: "Válvulas redutoras de pressão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8481.2",
    descricao: "Válvulas para transmissão óleo-hidráulicas ou pneumáticas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8481.80.92",
    descricao: "Válvulas solenoides",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8482",
    descricao: "Rolamentos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8483",
    descricao: "Árvores de transmissão, manivelas, mancais, engrenagens, volantes, polias, embreagens",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8484",
    descricao: "Juntas metaloplásticas; jogos ou sortidos de juntas de composições diferentes",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8505.20",
    descricao: "Acoplamentos, embreagens, variadores de velocidade e freios, eletromagnéticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8507.10",
    descricao: "Acumuladores elétricos de chumbo, para o arranque dos motores de pistão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8511",
    descricao: "Aparelhos e dispositivos elétricos de ignição ou de arranque",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8512.20",
    cest: "01.011.00",
    descricao: "Aparelhos elétricos de iluminação ou de sinalização",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8512.40",
    cest: "01.011.00",
    descricao: "Limpadores de para-brisas, degeladores e desembaçadores elétricos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8512.90.00",
    cest: "01.011.00",
    descricao: "Partes de aparelhos elétricos de iluminação ou sinalização",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8517.14.10",
    descricao: "Telefones móveis do tipo dos utilizados em veículos automóveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8518",
    descricao: "Alto-falantes, amplificadores elétricos de audiofrequência e partes",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8518.50.00",
    descricao: "Aparelhos elétricos de amplificação de som para veículos automotores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8519.81",
    descricao: "Aparelhos de reprodução de som",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85255011",
    descricao: "Aparelhos transmissores de radiotelefonia ou radiotelegrafia",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85255019",
    descricao: "Aparelhos transmissores de radiotelefonia ou radiotelegrafia",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8525.60.10",
    descricao: "Aparelhos transmissores de radiotelefonia ou radiotelegrafia",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8527.21.00",
    descricao: "Aparelhos receptores de radiodifusão para veículos automóveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8527.29.00",
    descricao: "Outros aparelhos receptores de radiodifusão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8521.90.90",
    descricao: "Outros aparelhos videofônicos de gravação ou de reprodução",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8529.10",
    descricao: "Antenas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8534.00",
    descricao: "Circuitos impressos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8535.30",
    descricao: "Interruptores e seccionadores e comutadores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8536.50",
    descricao: "Interruptores e seccionadores e comutadores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8536.10.00",
    descricao: "Fusíveis e corta-circuitos de fusíveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8536.20.00",
    descricao: "Disjuntores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8536.4",
    descricao: "Relés",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85381000",
    descricao: "Partes reconhecíveis como exclusivas ou principalmente destinados aos aparelhos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85389010",
    descricao: "Partes reconhecíveis como exclusivas ou principalmente destinados aos aparelhos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85389020",
    descricao: "Partes reconhecíveis como exclusivas ou principalmente destinados aos aparelhos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "85389090",
    descricao: "Partes reconhecíveis como exclusivas ou principalmente destinados aos aparelhos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8539.10",
    descricao: "Faróis e projetores, em unidades seladas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8539.2",
    descricao: "Lâmpadas e tubos de incandescência",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8544.20.00",
    descricao: "Cabos coaxiais e outros condutores elétricos coaxiais",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8544.30.00",
    descricao: "Jogos de fios para velas de ignição e outros jogos de fios",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8707",
    descricao: "Carroçarias para os veículos automóveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8708",
    descricao: "Partes e acessórios dos veículos automóveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8714.1",
    descricao: "Partes e acessórios de motocicletas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8716.90.90",
    descricao: "Engates para reboques e semi-reboques",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9026.10",
    descricao: "Medidores de nível; Medidores de vazão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9026.20",
    descricao: "Aparelhos para medida ou controle da pressão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9029",
    descricao: "Contadores, indicadores de velocidade e tacômetros, suas partes e acessórios",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9030.33.21",
    descricao: "Amperímetros",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9031.80.40",
    descricao: "Aparelhos digitais, de uso em veículos automóveis",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328921",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328922",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328923",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328924",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328925",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "90328929",
    descricao: "Controladores eletrônicos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9104.00.00",
    descricao: "Relógios para painéis de instrumentos e relógios semelhantes",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9401.20.00",
    descricao: "Assentos e partes de assentos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9401.99.00",
    descricao: "Assentos e partes de assentos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9613.80.00",
    descricao: "Acendedores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4009",
    descricao: "Tubos de borracha vulcanizada não endurecida",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4504.90.00",
    descricao: "Juntas de vedação de cortiça natural",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "6812.99.10",
    descricao: "Juntas de vedação de amianto",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4823.40.00",
    descricao: "Papel-diagrama para tacógrafo, em disco",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39191010",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39191020",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39191090",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39199010",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "39199090",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8708.29.99",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8412.31.10",
    cest: "01.006.00",
    descricao: "Cilindros pneumáticos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.19.00",
    descricao: "Bomba elétrica de lavador de para-brisa",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.50.90",
    descricao: "Bomba elétrica de lavador de para-brisa",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.81.00",
    descricao: "Bomba de assistência de direção hidráulica",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.60.19",
    descricao: "Bomba de assistência de direção hidráulica",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8413.70.10",
    descricao: "Bomba de assistência de direção hidráulica",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8414.59.10",
    descricao: "Motoventiladores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8414.59.90",
    descricao: "Motoventiladores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8421.39.90",
    descricao: "Filtros de pólen do ar-condicionado",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8501.10.19",
    descricao: "\"Máquina\" de vidro elétrico de porta",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8501.31.10",
    descricao: "Motor de limpador de para-brisa",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8504.50.00",
    descricao: "Bobinas de reatância e de autoindução",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8507.20",
    cest: "01.006.00",
    descricao: "Baterias de chumbo e de níquel-cádmio",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8507.30",
    cest: "01.007.00",
    descricao: "Baterias de chumbo e de níquel-cádmio",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8512.30.00",
    cest: "01.011.00",
    descricao: "Aparelhos de sinalização acústica (buzina)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9032.89.8",
    cest: "01.124.00",
    descricao: "Instrumentos para regulação de grandezas não elétricas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9032.89.9",
    cest: "01.124.00",
    descricao: "Instrumentos para regulação de grandezas não elétricas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9027.10.00",
    cest: "01.121.00",
    descricao: "Analisadores de gases ou de fumaça (sonda lambda)",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "4008.11.00",
    descricao: "Perfilados de borracha vulcanizada não endurecida",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5601.22.19",
    descricao: "Artefatos de pasta de fibra de uso automotivo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5703.29.00",
    descricao: "Tapetes/carpetes - náilon",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5703.39.00",
    descricao: "Tapetes de matérias têxteis sintéticas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "5911.90.00",
    descricao: "Forração interior capacete",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "6903.90.99",
    descricao: "Outros para-brisas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7007.29.00",
    descricao: "Moldura com espelho",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7314.50.00",
    descricao: "Corrente de transmissão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7315.11.00",
    descricao: "Corrente transmissão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7315.12.10",
    descricao: "Outras correntes de transmissão",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8418.99.00",
    descricao: "Condensador tubular metálico",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84195010",
    descricao: "Trocadores de calor",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84195021",
    descricao: "Trocadores de calor",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84195029",
    descricao: "Trocadores de calor",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "84195090",
    descricao: "Trocadores de calor",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8424.90.90",
    descricao: "Partes de aparelhos mecânicos de pulverizar ou dispersar",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8425.49.10",
    descricao: "Macacos manuais para veículos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8431.41.00",
    descricao: "Caçambas, pás, ganchos e tenazes para máquinas rodoviárias",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8501.61.00",
    descricao: "Geradores de corrente alternada de potência não superior a 75 kva",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8531.10.90",
    descricao: "Aparelhos elétricos para alarme de uso automotivo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9014.10.00",
    descricao: "Bússolas",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9025.19.90",
    descricao: "Indicadores de temperatura",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9025.90.10",
    descricao: "Partes de indicadores de temperatura",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9026.90",
    descricao: "Partes de aparelhos de medida ou controle",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9032.10.10",
    descricao: "Termostatos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9032.10.90",
    descricao: "Instrumentos e aparelhos para regulação",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "9032.20.00",
    descricao: "Pressostatos",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8716.90",
    descricao: "Peças para reboques e semi-reboques",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "7322.90.10",
    descricao: "Geradores de ar quente a combustível líquido",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },

  // CEST 02. Bebidas alcoólicas
  {
    ncm: "22051000",
    descricao: "Aperitivos, amargos, bitter e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22059000",
    descricao: "Aperitivos, amargos, bitter e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Aperitivos, amargos, bitter e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Batida e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Bebida ice",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22072000",
    descricao: "Cachaça e aguardentes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 29.04,
      inter_4: 54.85,
      inter_7: 50.01,
      inter_12: 41.94
    },
    sem_fidelidade: {
      interno: 29.04,
      inter_4: 54.85,
      inter_7: 50.01,
      inter_12: 41.94
    }
  },
  {
    ncm: "22084000",
    descricao: "Cachaça e aguardentes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 29.04,
      inter_4: 54.85,
      inter_7: 50.01,
      inter_12: 41.94
    },
    sem_fidelidade: {
      interno: 29.04,
      inter_4: 54.85,
      inter_7: 50.01,
      inter_12: 41.94
    }
  },
  {
    ncm: "22060090",
    descricao: "Catuaba e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22082000",
    descricao: "Conhaque, brandy e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22060090",
    descricao: "Cooler",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22085000",
    descricao: "Gim (gin) e genebra",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22087000",
    descricao: "Licores e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22082000",
    descricao: "Pisco",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22084000",
    descricao: "Rum",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22060090",
    descricao: "Saquê",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Steinhaeger",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Tequila",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22083010",
    descricao: "Uísque (whisky)",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22083020",
    descricao: "Uísque (whisky)",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22083090",
    descricao: "Uísque (whisky)",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22051000",
    descricao: "Vermute e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22059000",
    descricao: "Vermute e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22086000",
    descricao: "Vodka",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Derivados de vodka",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22089000",
    descricao: "Arak",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22082000",
    descricao: "Aguardente vínica/grappa",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22060010",
    descricao: "Sidra e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22060090",
    cest: "02.024.00",
    descricao: "Sangrias e coquetéis",
    aliquota_interna_pb: 27,
    com_fidelidade: {
      interno: 29.04,
      inter_4: 65.17,
      inter_7: 60.00,
      inter_12: 51.40
    },
    sem_fidelidade: {
      interno: 29.04,
      inter_4: 65.17,
      inter_7: 60.00,
      inter_12: 51.40
    }
  },
  {
    ncm: "22041010",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22041090",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22042100",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22042211",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22042219",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22042911",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "22042919",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  // CEST 03. Cervejas, chopes, refrigerantes, águas e outras bebidas
  {
    ncm: "22011000",
    cest: "03.003.00",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em embalagem de vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22019000",
    cest: "03.003.00",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em embalagem de vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.003.01",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, adicionadas de sais, em embalagem de vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.00",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em copo plástico descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22019000",
    cest: "03.005.00",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em copo plástico descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.01",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, adicionadas de sais, em copo plástico descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.02",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em jarra descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22019000",
    cest: "03.005.02",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em jarra descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.03",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, adicionadas de sais, em jarra descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.04",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em demais embalagens descartáveis",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22019000",
    cest: "03.005.04",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, em demais embalagens descartáveis",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.005.05",
    descricao: "Água mineral, gasosa ou não, ou potável, naturais, adicionadas de sais, em demais embalagens descartáveis",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "2201",
    cest: "03.006.00",
    descricao: "Outras águas minerais, gasosas ou não, ou potável, naturais",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22021000",
    cest: "03.007.00",
    descricao: "Água aromatizada artificialmente, exceto os refrescos e refrigerantes",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.008.00",
    descricao: "Outras águas minerais, gasosas ou não, ou potável, naturais, inclusive gaseificadas ou aromatizadas artificialmente",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22021000",
    cest: "03.010.00",
    descricao: "Refrigerante em vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.010.00",
    descricao: "Refrigerante em vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22021000",
    cest: "03.010.01",
    descricao: "Refrigerante em embalagem pet",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.010.01",
    descricao: "Refrigerante em embalagem pet",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22021000",
    cest: "03.010.02",
    descricao: "Refrigerante em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.010.02",
    descricao: "Refrigerante em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22021000",
    cest: "03.011.00",
    descricao: "Demais refrigerantes",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.011.00",
    descricao: "Demais refrigerantes",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "2202",
    cest: "03.011.01",
    descricao: "Espumantes sem álcool",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "21069010",
    cest: "03.012.00",
    descricao: "Xarope ou extrato concentrado destinados ao preparo de refrigerante em máquina",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "21069010",
    cest: "03.012.01",
    descricao: "Cápsula de refrigerante",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "210690",
    cest: "03.013.00",
    descricao: "Bebidas energéticas em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.013.00",
    descricao: "Bebidas energéticas em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "210690",
    cest: "03.013.01",
    descricao: "Bebidas energéticas em embalagem PET",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.013.01",
    descricao: "Bebidas energéticas em embalagem PET",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "210690",
    cest: "03.013.02",
    descricao: "Bebidas energéticas em vidro",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.013.02",
    descricao: "Bebidas energéticas em vidro",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "210690",
    cest: "03.015.00",
    descricao: "Bebidas hidroeletrolíticas",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029900",
    cest: "03.015.00",
    descricao: "Bebidas hidroeletrolíticas",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.00",
    descricao: "Cerveja em garrafa de vidro retornável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.01",
    descricao: "Cerveja em garrafa de vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.02",
    descricao: "Cerveja em garrafa de alumínio",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.03",
    descricao: "Cerveja em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.04",
    descricao: "Cerveja em barril",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.05",
    descricao: "Cerveja em embalagem PET",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.021.06",
    descricao: "Cerveja em outras embalagens",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.00",
    descricao: "Cerveja sem álcool em garrafa de vidro retornável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.01",
    descricao: "Cerveja sem álcool em garrafa de vidro descartável",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.02",
    descricao: "Cerveja sem álcool em garrafa de alumínio",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.03",
    descricao: "Cerveja sem álcool em lata",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.04",
    descricao: "Cerveja sem álcool em barril",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.05",
    descricao: "Cerveja sem álcool em embalagem PET",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22029100",
    cest: "03.022.06",
    descricao: "Cerveja sem álcool em outras embalagens",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22030000",
    cest: "03.023.00",
    descricao: "Chope",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.024.00",
    descricao: "Água mineral em embalagens retornáveis com capacidade igual ou superior a 10 (dez) e inferior a 20 (vinte) litros",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "22011000",
    cest: "03.025.00",
    descricao: "Água mineral em embalagens retornáveis com capacidade igual ou superior a 20 (vinte) litros",
    aliquota_interna_pb: 20,
    ...cest03Mva
  },
  {
    ncm: "24022000",
    descricao: "Cigarros",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },

  // CEST 05. Cimentos
  {
    ncm: "25231000",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },
  {
    ncm: "25232100",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },
  {
    ncm: "25232910",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },
  {
    ncm: "25232990",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },
  {
    ncm: "25233000",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },
  {
    ncm: "25239000",
    cest: "05.001.00",
    descricao: "Cimento",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    },
    sem_fidelidade: {
      interno: 20.00,
      inter_4: 44.00,
      inter_7: 39.50,
      inter_12: 32.00
    }
  },

  // CEST 06. Combustíveis
  {
    ncm: "27101921",
    descricao: "Combustíveis",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "27101922",
    descricao: "Combustíveis",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "27101929",
    descricao: "Combustíveis",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "27102000",
    descricao: "Combustíveis",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },

  // CEST 10. Construção
  {
    ncm: "39211100",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39211200",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39211300",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39211400",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39211900",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39219011",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39219019",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39219020",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "39219090",
    cest: "10.001.00",
    descricao: "Chapas e telhas de plástico",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "69010000",
    cest: "10.002.00",
    descricao: "Tijolos, placas, ladrilhos e outras peças cerâmicas de farinhas siliciosas fósseis",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "70099100",
    cest: "10.003.00",
    descricao: "Espelhos de vidro, mesmo emoldurados, excluídos os de uso automotivo",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "70099200",
    cest: "10.003.00",
    descricao: "Espelhos de vidro, mesmo emoldurados, excluídos os de uso automotivo",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73101010",
    cest: "10.004.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73101090",
    cest: "10.004.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73102110",
    cest: "10.005.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73102190",
    cest: "10.005.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73102910",
    cest: "10.006.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },
  {
    ncm: "73102990",
    cest: "10.006.00",
    descricao: "Reservatórios, tonéis, cubas e recipientes semelhantes para quaisquer matérias",
    aliquota_interna_pb: 20,
    ...construcaoMva
  },

  // CEST 13. Medicamentos
  {
    ncm: "3003",
    cest: "13.001.00",
    descricao: "Medicamentos de referência - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3004",
    cest: "13.001.00",
    descricao: "Medicamentos de referência - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3003",
    cest: "13.001.01",
    descricao: "Medicamentos de referência - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3004",
    cest: "13.001.01",
    descricao: "Medicamentos de referência - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3003",
    cest: "13.001.02",
    descricao: "Medicamentos de referência - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3004",
    cest: "13.001.02",
    descricao: "Medicamentos de referência - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3003",
    cest: "13.002.00",
    descricao: "Medicamentos genérico - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3004",
    cest: "13.002.00",
    descricao: "Medicamentos genérico - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3003",
    cest: "13.002.01",
    descricao: "Medicamentos genérico - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3004",
    cest: "13.002.01",
    descricao: "Medicamentos genérico - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3003",
    cest: "13.002.02",
    descricao: "Medicamentos genérico - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3004",
    cest: "13.002.02",
    descricao: "Medicamentos genérico - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3003",
    cest: "13.003.00",
    descricao: "Medicamentos similar - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3004",
    cest: "13.003.00",
    descricao: "Medicamentos similar - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3003",
    cest: "13.003.01",
    descricao: "Medicamentos similar - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3004",
    cest: "13.003.01",
    descricao: "Medicamentos similar - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3003",
    cest: "13.003.02",
    descricao: "Medicamentos similar - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3004",
    cest: "13.003.02",
    descricao: "Medicamentos similar - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3003",
    cest: "13.004.00",
    descricao: "Outros tipos de medicamentos - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3004",
    cest: "13.004.00",
    descricao: "Outros tipos de medicamentos - positiva, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "3003",
    cest: "13.004.01",
    descricao: "Outros tipos de medicamentos - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3004",
    cest: "13.004.01",
    descricao: "Outros tipos de medicamentos - negativa, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "3003",
    cest: "13.004.02",
    descricao: "Outros tipos de medicamentos - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "3004",
    cest: "13.004.02",
    descricao: "Outros tipos de medicamentos - neutra, exceto para uso veterinário",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "30066000",
    cest: "13.005.00",
    descricao: "Preparações químicas contraceptivas de referência - positiva",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "30066000",
    cest: "13.005.01",
    descricao: "Preparações químicas contraceptivas de referência - negativa",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "30066000",
    cest: "13.005.02",
    descricao: "Preparações químicas contraceptivas genérico - positiva",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "30066000",
    cest: "13.005.03",
    descricao: "Preparações químicas contraceptivas genérico - negativa",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "30066000",
    cest: "13.005.04",
    descricao: "Preparações químicas contraceptivas similar - positiva",
    aliquota_interna_pb: 20,
    ...medPositivaMva
  },
  {
    ncm: "30066000",
    cest: "13.005.05",
    descricao: "Preparações químicas contraceptivas similar - negativa",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "2936",
    cest: "13.006.00",
    descricao: "Provitaminas e vitaminas",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "30021210",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30021220",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30021230",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30021300",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30021400",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30021500",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30024111",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30024112",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30024113",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },
  {
    ncm: "30024119",
    descricao: "Vacinas e Sangue",
    aliquota_interna_pb: 20,
    ...bebidasMva
  },

  // CEST 17. Alimentos
  {
    ncm: "0201",
    cest: "17.001.00",
    descricao: "Carne de gado bovino, fresca ou refrigerada",
    aliquota_interna_pb: 20,
    ...alimentos13Mva
  },
  {
    ncm: "0202",
    cest: "17.001.00",
    descricao: "Carne de gado bovino, congelada",
    aliquota_interna_pb: 20,
    ...alimentos13Mva
  },
  {
    ncm: "0203",
    cest: "17.002.00",
    descricao: "Carne de gado suíno, fresca, refrigerada ou congelada",
    aliquota_interna_pb: 20,
    ...alimentos13Mva
  },
  {
    ncm: "0207",
    cest: "17.003.00",
    descricao: "Carnes e miudezas comestíveis, frescas, refrigeradas ou congeladas, das aves",
    aliquota_interna_pb: 20,
    ...alimentos13Mva
  },
  {
    ncm: "0401",
    cest: "17.011.00",
    descricao: "Leite UHT (Ultra High Temperature)",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "0406",
    cest: "17.016.00",
    descricao: "Queijos",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "15079011",
    cest: "17.020.00",
    descricao: "Óleo de soja refinado",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "1601",
    cest: "17.024.00",
    descricao: "Enchidos (embutidos) e produtos semelhantes, de carne, de miudezas ou de sangue",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "1701",
    cest: "17.027.00",
    descricao: "Açúcar",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "1806",
    cest: "17.031.00",
    descricao: "Chocolate",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "19021",
    cest: "17.046.00",
    descricao: "Massas alimentícias, não cozidas, nem recheadas, nem preparadas de outro modo",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "19023000",
    cest: "17.047.00",
    descricao: "Outras massas alimentícias",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "19053100",
    cest: "17.052.00",
    descricao: "Biscoitos e bolachas",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "20029090",
    cest: "17.056.00",
    descricao: "Extrato de tomate",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "21011",
    cest: "17.064.00",
    descricao: "Café torrado e moído",
    aliquota_interna_pb: 20,
    ...alimentos20Mva
  },
  {
    ncm: "21032010",
    cest: "17.078.00",
    descricao: "Molho de tomate",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "21041011",
    cest: "17.083.00",
    descricao: "Caldos e sopas preparados",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },
  {
    ncm: "22029900",
    cest: "17.096.00",
    descricao: "Néctares de frutas",
    aliquota_interna_pb: 20,
    ...alimentos40Mva
  },

  // CEST 12 e 21. Materiais Elétricos e Eletrônicos
  {
    ncm: "85392110",
    descricao: "Lâmpadas e Reatores",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "85392190",
    descricao: "Lâmpadas e Reatores",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "85393100",
    descricao: "Lâmpadas e Reatores",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "85395200",
    descricao: "Lâmpadas e Reatores",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },

  // CEST 20. Perfumaria e Higiene Pessoal
  {
    ncm: "33030010",
    cest: "20.001.00",
    descricao: "Perfumes (extratos)",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33030020",
    cest: "20.002.00",
    descricao: "Águas-de-colônia",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33041000",
    cest: "20.003.00",
    descricao: "Produtos de maquiagem para os lábios",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33042010",
    cest: "20.004.00",
    descricao: "Sombra, delineador, lápis para sobrancelhas e rímel",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33042090",
    cest: "20.004.00",
    descricao: "Sombra, delineador, lápis para sobrancelhas e rímel",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33043000",
    cest: "20.005.00",
    descricao: "Preparações para manicuros e pedicuros",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33049100",
    cest: "20.006.00",
    descricao: "Pós, incluídos os compactos, para maquiagem",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33049910",
    cest: "20.007.00",
    descricao: "Cremes de beleza, cremes nutritivos e loções tônicas",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33049990",
    cest: "20.008.00",
    descricao: "Outros produtos de maquiagem e de cuidado da pele",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33051000",
    cest: "20.009.00",
    descricao: "Xampus para o cabelo",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33052000",
    cest: "20.010.00",
    descricao: "Preparações para ondulação ou alisamento, permanentes, dos cabelos",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33053000",
    cest: "20.011.00",
    descricao: "Laquês para o cabelo",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33059000",
    cest: "20.012.00",
    descricao: "Outras preparações capilares",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33061000",
    cest: "20.023.00",
    descricao: "Dentifrícios",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "33062000",
    cest: "20.024.00",
    descricao: "Fios utilizados para limpar os espaços interdentais (fios dentais)",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "33069000",
    cest: "20.025.00",
    descricao: "Outras preparações para higiene bucal ou dentária",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "33071000",
    cest: "20.026.00",
    descricao: "Preparações para barbear (antes, durante ou após)",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33072010",
    cest: "20.027.00",
    descricao: "Desodorantes (desodorizantes) corporais e antiperspirantes, líquidos",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33072090",
    cest: "20.028.00",
    descricao: "Outros desodorantes (desodorizantes) corporais e antiperspirantes",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "33073000",
    cest: "20.029.00",
    descricao: "Sais perfumados e outras preparações para banhos",
    aliquota_interna_pb: 20,
    ...medNeutraMva
  },
  {
    ncm: "34011190",
    cest: "20.031.00",
    descricao: "Sabonetes de toucador em barras, pedaços ou figuras moldados",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "34011190",
    cest: "20.032.00",
    descricao: "Outros sabonetes, exceto de toucador em barras, pedaços ou figuras moldados",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "34012010",
    cest: "20.033.00",
    descricao: "Sabonetes de toucador sob outras formas",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "34013000",
    cest: "20.035.00",
    descricao: "Produtos e preparações orgânicos tensoativos para lavagem da pele, líquidos ou em creme",
    aliquota_interna_pb: 20,
    ...medNegativaMva
  },
  {
    ncm: "39233090",
    cest: "20.063.00",
    descricao: "Mamadeiras",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "39241000",
    cest: "20.063.00",
    descricao: "Mamadeiras",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "39249000",
    cest: "20.063.00",
    descricao: "Mamadeiras",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "40149090",
    cest: "20.063.00",
    descricao: "Mamadeiras",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "70133700",
    cest: "20.063.00",
    descricao: "Mamadeiras",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "39249000",
    cest: "20.064.00",
    descricao: "Chupetas e bicos para mamadeiras e para chupetas, de silicone",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "40149090",
    cest: "20.064.00",
    descricao: "Chupetas e bicos para mamadeiras e para chupetas, de borracha",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "82121020",
    cest: "20.064.00",
    descricao: "Aparelhos e lâminas de barbear",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "96032100",
    cest: "20.064.00",
    descricao: "Escovas de dentes",
    aliquota_interna_pb: 20,
    ...higienePessoalMva
  },
  {
    ncm: "8212.20.10",
    cest: "20.064.00",
    descricao: "Aparelhos e lâminas de barbear",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 30.00,
      inter_4: 56.00,
      inter_7: 51.13,
      inter_12: 43.00
    },
    sem_fidelidade: {
      interno: 30.00,
      inter_4: 56.00,
      inter_7: 51.13,
      inter_12: 43.00
    }
  },

  // CEST 07. Energia Elétrica
  {
    ncm: "2716.00.00",
    cest: "07.001.00",
    descricao: "Energia elétrica",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },

  // CEST 09. Lâmpadas, reatores e “starter”
  {
    ncm: "8539",
    cest: "09.001.00",
    descricao: "Lâmpadas elétricas",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "8540",
    cest: "09.002.20",
    descricao: "Lâmpadas eletrônicas",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "8504.10.00",
    cest: "09.003.00",
    descricao: "Reatores para lâmpadas ou tubos de descargas",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "8536.50",
    cest: "09.004.00",
    descricao: "“Starter”",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },
  {
    ncm: "8539.52.00",
    cest: "09.005.00",
    descricao: "Lâmpadas de LED (Diodos Emissores de Luz)",
    aliquota_interna_pb: 20,
    ...lampadasMva
  },

  // CEST 16. Pneumáticos, câmaras de ar e protetores de borracha
  {
    ncm: "4011.10.00",
    cest: "16.001.00",
    descricao: "Pneus novos, dos tipos utilizados em automóveis de passageiros",
    aliquota_interna_pb: 20,
    ...pneusMva
  },
  {
    ncm: "4011",
    cest: "16.002.00",
    descricao: "Pneus novos, dos tipos utilizados em caminhões, ônibus, aviões, máquinas",
    aliquota_interna_pb: 20,
    ...pneusMva
  },
  {
    ncm: "4011.40.00",
    cest: "16.003.00",
    descricao: "Pneus novos para motocicletas",
    aliquota_interna_pb: 20,
    ...pneusMotoMva
  },
  {
    ncm: "4011",
    cest: "16.004.00",
    descricao: "Outros tipos de pneus novos",
    aliquota_interna_pb: 20,
    ...pneusOutrosMva
  },
  {
    ncm: "4012.90",
    cest: "16.007.00",
    descricao: "Protetores de borracha",
    aliquota_interna_pb: 20,
    ...pneusOutrosMva
  },
  {
    ncm: "4013",
    cest: "16.008.00",
    descricao: "Câmaras de ar de borracha",
    aliquota_interna_pb: 20,
    ...pneusOutrosMva
  },

  // CEST 22. Rações para animais domésticos
  {
    ncm: "2309",
    cest: "22.001.00",
    descricao: "Ração tipo “pet” para animais domésticos",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 46,
      inter_4: 75.20,
      inter_7: 69.73,
      inter_12: 60.60
    },
    sem_fidelidade: {
      interno: 46,
      inter_4: 75.20,
      inter_7: 69.73,
      inter_12: 60.60
    }
  },

  // CEST 23. Sorvetes e preparados para fabricação de sorvetes em máquinas
  {
    ncm: "2105.00",
    cest: "23.001.00",
    descricao: "Sorvetes de qualquer espécie",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 70,
      inter_4: 104,
      inter_7: 97.63,
      inter_12: 87
    },
    sem_fidelidade: {
      interno: 70,
      inter_4: 104,
      inter_7: 97.63,
      inter_12: 87
    }
  },
  {
    ncm: "1806",
    cest: "23.002.00",
    descricao: "Preparados para fabricação de sorvete em máquina",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    },
    sem_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    }
  },
  {
    ncm: "1901",
    cest: "23.002.00",
    descricao: "Preparados para fabricação de sorvete em máquina",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    },
    sem_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    }
  },
  {
    ncm: "2106",
    cest: "23.002.00",
    descricao: "Preparados para fabricação de sorvete em máquina",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    },
    sem_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    }
  },
  {
    ncm: "0404",
    cest: "23.002.00",
    descricao: "Preparados para fabricação de sorvete em máquina",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    },
    sem_fidelidade: {
      interno: 328,
      inter_4: 413.60,
      inter_7: 397.55,
      inter_12: 370.80
    }
  },

  // CEST 24. Tintas e vernizes
  {
    ncm: "3208",
    cest: "24.001.00",
    descricao: "Tintas, vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "3209",
    cest: "24.001.00",
    descricao: "Tintas, vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "3210.00",
    cest: "24.001.00",
    descricao: "Tintas, vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "2821",
    cest: "24.002.00",
    descricao: "Xadrez e pós assemelhados",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "3204.17.00",
    cest: "24.002.00",
    descricao: "Xadrez e pós assemelhados",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "3206",
    cest: "24.002.00",
    descricao: "Xadrez e pós assemelhados",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    },
    sem_fidelidade: {
      interno: 35,
      inter_4: 62,
      inter_7: 56.94,
      inter_12: 48.50
    }
  },
  {
    ncm: "3204",
    cest: "24.003.00",
    descricao: "Corantes para aplicação em bases, tintas e vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    },
    sem_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    }
  },
  {
    ncm: "3205.00.00",
    cest: "24.003.00",
    descricao: "Corantes para aplicação em bases, tintas e vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    },
    sem_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    }
  },
  {
    ncm: "3206",
    cest: "24.003.00",
    descricao: "Corantes para aplicação em bases, tintas e vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    },
    sem_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    }
  },
  {
    ncm: "3212",
    cest: "24.003.00",
    descricao: "Corantes para aplicação em bases, tintas e vernizes",
    aliquota_interna_pb: 20,
    com_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    },
    sem_fidelidade: {
      interno: 50,
      inter_4: 80,
      inter_7: 74.38,
      inter_12: 65
    }
  },

  // CEST 25. Veículos automotores
  {
    ncm: "8702.10.00",
    cest: "25.001.00",
    descricao: "Veículos automóveis para transporte de 10 pessoas ou mais",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8702.40.90",
    cest: "25.002.00",
    descricao: "Veículos automóveis para transporte de 10 pessoas ou mais, unicamente com motor elétrico",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.21.00",
    cest: "25.003.00",
    descricao: "Automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.22.10",
    cest: "25.004.00",
    descricao: "Automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.22.90",
    cest: "25.005.00",
    descricao: "Outros automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.23.10",
    cest: "25.006.00",
    descricao: "Automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.23.90",
    cest: "25.007.00",
    descricao: "Outros automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.24.10",
    cest: "25.008.00",
    descricao: "Automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.24.90",
    cest: "25.009.00",
    descricao: "Outros automóveis unicamente com motor de pistão alternativo de ignição por centelha",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.32.10",
    cest: "25.010.00",
    descricao: "Automóveis unicamente com motor diesel ou semidiesel",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.32.90",
    cest: "25.011.00",
    descricao: "Outros automóveis unicamente com motor diesel ou semidiesel",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.33.10",
    cest: "25.012.00",
    descricao: "Automóveis unicamente com motor diesel ou semidiesel",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.33.90",
    cest: "25.013.00",
    descricao: "Outros automóveis unicamente com motor diesel ou semidiesel",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.21.10",
    cest: "25.014.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.21.20",
    cest: "25.015.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.21.30",
    cest: "25.016.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.21.90",
    cest: "25.017.00",
    descricao: "Outros veículos",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.31.10",
    cest: "25.018.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.31.20",
    cest: "25.019.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.31.30",
    cest: "25.020.00",
    descricao: "Veículos automóveis para transporte de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.31.90",
    cest: "25.021.00",
    descricao: "Outros veículos",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8702.20.00",
    cest: "25.022.00",
    descricao: "Veículos automóveis para transporte de 10 pessoas ou mais",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8702.30.00",
    cest: "25.023.00",
    descricao: "Veículos automóveis para transporte de 10 pessoas ou mais",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8702.90.00",
    cest: "25.024.00",
    descricao: "Outros veículos automóveis para transporte de 10 pessoas ou mais",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.40.00",
    cest: "25.025.00",
    descricao: "Automóveis equipados para propulsão, simultaneamente, com um motor de pistão alternativo",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.50.00",
    cest: "25.026.00",
    descricao: "Automóveis equipados para propulsão, simultaneamente, com um motor de pistão por compressão",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.60.00",
    cest: "25.027.00",
    descricao: "Automóveis equipados para propulsão, simultaneamente, com um motor de pistão alternativo",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.70.00",
    cest: "25.028.00",
    descricao: "Automóveis equipados para propulsão, simultaneamente, com um motor de pistão por compressão",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8703.80.00",
    cest: "25.029.00",
    descricao: "Outros veículos, equipados unicamente com motor elétrico para propulsão",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.41.00",
    cest: "25.030.00",
    descricao: "Outros veículos para transportes de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.51.00",
    cest: "25.031.00",
    descricao: "Outros veículos para transportes de mercadorias",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },
  {
    ncm: "8704.60.00",
    cest: "25.032.00",
    descricao: "Outros veículos para transporte de mercadorias, unicamente com motor elétrico",
    aliquota_interna_pb: 20,
    ...veiculosMva
  },

  // CEST 26. Veículos de duas e três rodas motorizados
  {
    ncm: "8711",
    cest: "26.001.00",
    descricao: "Motocicletas (incluídos os ciclomotores) e outros ciclos equipados com motor auxiliar",
    aliquota_interna_pb: 20,
    ...motosMva
  },
  {
    ncm: "8711",
    cest: "26.001.01",
    descricao: "Bicicletas e outros ciclos (incluídos os triciclos) com propulsão de motor elétrico",
    aliquota_interna_pb: 20,
    ...motosMva
  }
];
