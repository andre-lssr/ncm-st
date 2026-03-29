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
    ncm: "3917",
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
    ncm: "4010.3",
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
    ncm: "4823.90.9",
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
    ncm: "6306.1",
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
    ncm: "6813",
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
    ncm: "8301.20",
    descricao: "Fechaduras e partes de fechaduras",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8301.60",
    descricao: "Fechaduras e partes de fechaduras",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8301.70",
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
    ncm: "8414.10.00",
    descricao: "Bombas de vácuo",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8414.80.1",
    descricao: "Compressores e turbocompressores de ar",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "8414.80.2",
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
    ncm: "8415.20",
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
    ncm: "8525.50.1",
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
    ncm: "8538",
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
    ncm: "9032.89.2",
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
    ncm: "3919.10",
    descricao: "Fitas, tiras, adesivos, autocolantes, de plástico, refletores",
    aliquota_interna_pb: 20,
    ...autopeçasMva
  },
  {
    ncm: "3919.90",
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
    ncm: "8419.50",
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
    ncm: "2205",
    descricao: "Aperitivos, amargos, bitter e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Aperitivos, amargos, bitter e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Batida e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Bebida ice",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2207.20",
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
    ncm: "2208.40.00",
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
    ncm: "2206.00.90",
    descricao: "Catuaba e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.20.00",
    descricao: "Conhaque, brandy e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2206.00.90",
    descricao: "Cooler",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.50.00",
    descricao: "Gim (gin) e genebra",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.70.00",
    descricao: "Licores e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.20.00",
    descricao: "Pisco",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.40.00",
    descricao: "Rum",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2206.00.90",
    descricao: "Saquê",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Steinhaeger",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Tequila",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.30",
    descricao: "Uísque",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2205",
    descricao: "Vermute e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.60.00",
    descricao: "Vodka",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Derivados de vodka",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.90.00",
    descricao: "Arak",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2208.20.00",
    descricao: "Aguardente vínica/grappa",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2206.00.10",
    descricao: "Sidra e similares",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },
  {
    ncm: "2206.00.90",
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
    ncm: "2204",
    cest: "02.001.00",
    descricao: "Vinhos de uvas frescas, incluindo os vinhos enriquecidos com álcool",
    aliquota_interna_pb: 27,
    ...bebidasMva
  },

  // CEST 05. Cimentos
  {
    ncm: "2523",
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
  }
];
