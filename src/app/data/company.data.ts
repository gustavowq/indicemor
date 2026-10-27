/**
 * DADOS DA EMPRESA
 * Informações de contato e cadastro exibidas no topo, rodapé, contato e SEO.
 * Alterar aqui atualiza o site inteiro.
 */
export const COMPANY = {
  name: 'ÍndiceMor',
  legalName: 'INDICEMOR Assessoria Contábil e Financeira Ltda.',
  cnpj: '45.373.053/0001-96',
  tagline: 'Assessoria Contábil e Financeira',
  shortDescription:
    'Assessoria Contábil e Financeira especializada em soluções estratégicas para a gestão pública municipal.',
  phoneDisplay: '+55 (62) 99843-2183',
  phoneHref: 'tel:+5562998432183',
  whatsappHref: 'https://wa.me/5562998432183',
  email: 'contato@indicemor.com.br',
  address: {
    street: 'Rua 10, nº 250, Quadra B-6, Lote 5/9, Sala 09',
    complement: 'Trade Center, Setor Oeste',
    city: 'Goiânia',
    state: 'GO',
    zip: '74.120-020',
    mapsUrl: 'https://maps.app.goo.gl/hbpNTHiMZgDHNnck9',
  },
  hours: {
    weekdays: 'Segunda a sexta, das 08:00 às 18:00',
    weekend: 'Sábado e domingo: fechado',
  },
  /** Endereço da área do cliente (botão "Login"). */
  loginUrl: 'https://indicebr.com.br/saas/',
  /** Vídeo institucional publicado no YouTube. */
  youtubeId: '9qfIcrEviWo',
  /**
   * TODO: preencher com os perfis reais. No site atual os ícones apontam para "#".
   * Enquanto estiverem vazios, os ícones não são exibidos.
   */
  social: {
    instagram: '',
    linkedin: '',
  },
  statesServed: ['Goiás', 'Mato Grosso'],
} as const;
