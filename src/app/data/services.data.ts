/**
 * SERVIÇOS
 * Os 4 serviços de inteligência fiscal usam os textos do site atual.
 * SIGMOP e QualyPosto usam as descrições enviadas pela ÍndiceMor.
 * O Projeto de Fiscalização ainda não tem descrição: preencha `description`,
 * `highlights` e `summary` e remova `comingSoon` quando o conteúdo estiver pronto.
 */
import { Service, ServiceCategoryInfo } from '../core/models/content.models';

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'inteligencia-fiscal',
    label: 'Inteligência fiscal municipal',
    description: 'Índices de participação, ITR e DITR para ampliar receitas e corrigir distorções.',
  },
  {
    id: 'gestao-fiscalizacao',
    label: 'Gestão e fiscalização',
    description: 'Tecnologia e organização para acompanhar e fiscalizar a execução pública.',
  },
  {
    id: 'postos-combustiveis',
    label: 'Postos de combustíveis',
    description: 'Vistorias e tecnologia para a operação de postos.',
  },
];

export const SERVICES: Service[] = [
  // --- Inteligência fiscal municipal ---------------------------------------
  {
    slug: 'ipm-go',
    name: 'IPM-GO',
    fullName: 'Índice de Participação dos Municípios de Goiás',
    category: 'inteligencia-fiscal',
    icon: 'trending-up',
    audience: 'Prefeituras de Goiás',
    description:
      'Oferecemos assessoria completa para análise, revisão e acompanhamento do IPM-GO, garantindo que o município esteja corretamente representado na formação do índice. Nossa atuação técnica contribui para maximizar a participação municipal e evitar perdas silenciosas de receita.',
    highlightsTitle: 'Resultados esperados',
    highlights: [
      'Otimização do coeficiente de participação',
      'Identificação de inconsistências nos dados',
      'Estratégia de crescimento contínuo do índice',
      'Suporte técnico especializado',
    ],
    summary:
      'Otimização do coeficiente de participação, identificação de inconsistências nos dados e estratégia de crescimento contínuo do índice.',
  },
  {
    slug: 'ipm-mt',
    name: 'IPM-MT',
    fullName: 'Índice de Participação dos Municípios do Mato Grosso',
    category: 'inteligencia-fiscal',
    icon: 'bar-chart',
    audience: 'Prefeituras de Mato Grosso',
    description:
      'Realizamos análise técnica aprofundada do IPM-MT, identificando inconsistências, oportunidades de correção e estratégias para melhorar o coeficiente de participação do município na distribuição do ICMS. Atuamos desde o diagnóstico até o acompanhamento técnico junto aos órgãos competentes.',
    highlightsTitle: 'Benefícios para o município',
    highlights: [
      'Possível aumento nos repasses de ICMS',
      'Revisão estratégica de dados econômicos',
      'Correção de distorções no cálculo do índice',
      'Maior previsibilidade orçamentária',
    ],
    summary:
      'Possível aumento nos repasses de ICMS, revisão estratégica de dados econômicos e correção de distorções no cálculo do índice.',
  },
  {
    slug: 'itr',
    name: 'ITR',
    fullName: 'Imposto Territorial Rural',
    category: 'inteligencia-fiscal',
    icon: 'sprout',
    audience: 'Prefeituras',
    description:
      'Prestamos assessoria estratégica para municípios que possuem ou desejam firmar convênio para fiscalização e cobrança do ITR. Estruturamos processos, orientamos equipes e implementamos estratégias que aumentam a arrecadação sem elevar a carga tributária, apenas garantindo que o município receba corretamente sua parcela.',
    highlightsTitle: 'Impactos diretos',
    highlights: [
      'Aumento da receita própria',
      'Fortalecimento da autonomia financeira',
      'Melhor controle da área rural',
      'Redução de inconsistências cadastrais',
    ],
    summary:
      'Aumento da receita própria, fortalecimento da autonomia financeira e melhor controle da área rural.',
  },
  {
    slug: 'ditr',
    name: 'DITR',
    fullName: 'Declaração do Imposto Territorial Rural',
    category: 'inteligencia-fiscal',
    icon: 'search',
    audience: 'Prefeituras',
    description:
      'Realizamos análise técnica das informações relacionadas à DITR, com cruzamento estratégico de dados para identificar inconsistências que impactam a arrecadação do ITR. Nosso trabalho fortalece a capacidade fiscalizatória do município e amplia o potencial de recuperação de receita.',
    highlightsTitle: 'Diferenciais do serviço',
    highlights: [
      'Inteligência de dados aplicada à arrecadação rural',
      'Apoio técnico às equipes municipais',
      'Segurança jurídica e respaldo técnico',
      'Identificação de oportunidades de incremento de receita',
    ],
    summary:
      'Inteligência de dados aplicada à arrecadação rural, apoio técnico às equipes municipais e segurança jurídica.',
  },

  // --- Gestão e fiscalização -----------------------------------------------
  {
    slug: 'sigmop',
    name: 'SIGMOP',
    fullName: 'Sistema de gestão e acompanhamento de obras públicas',
    category: 'gestao-fiscalizacao',
    icon: 'hard-hat',
    audience: 'Gestão pública',
    description:
      'O SIGMOP é um sistema voltado à gestão e ao acompanhamento de obras públicas. Seu propósito é centralizar informações sobre as obras, os responsáveis, as empreiteiras, os orçamentos e o andamento da execução, facilitando a organização e a fiscalização.',
    highlightsTitle: 'Informações centralizadas',
    highlights: [
      'Obras e responsáveis',
      'Empreiteiras',
      'Orçamentos',
      'Andamento da execução',
      'Organização e fiscalização facilitadas',
    ],
    summary:
      'Centraliza obras, responsáveis, empreiteiras, orçamentos e andamento da execução para facilitar a organização e a fiscalização.',
  },
  {
    slug: 'projeto-de-fiscalizacao',
    name: 'Projeto de Fiscalização',
    // TODO: inserir o subtítulo (ex.: o que é fiscalizado e para quem).
    fullName: '',
    category: 'gestao-fiscalizacao',
    icon: 'clipboard-check',
    audience: 'Gestão pública',
    // TODO: inserir a descrição do Projeto de Fiscalização.
    description: '',
    highlightsTitle: 'Destaques',
    // TODO: inserir os principais pontos do projeto.
    highlights: [],
    summary: '',
    comingSoon: true,
  },

  // --- Postos de combustíveis ------------------------------------------------
  {
    slug: 'qualyposto',
    name: 'QualyPosto',
    fullName: 'Vistorias e tecnologia para postos de combustíveis',
    category: 'postos-combustiveis',
    icon: 'fuel',
    audience: 'Postos de combustíveis',
    description:
      'O QualyPosto une vistorias presenciais e tecnologia para ajudar postos de combustíveis a identificar irregularidades, reduzir riscos de multas e controlar o recebimento de combustíveis. Com relatórios, evidências e um painel de gestão, o proprietário acompanha a operação mesmo à distância.',
    highlightsTitle: 'O que o QualyPosto oferece',
    highlights: [
      'Vistorias presenciais',
      'Identificação de irregularidades',
      'Redução de riscos de multas',
      'Controle do recebimento de combustíveis',
      'Relatórios, evidências e painel de gestão',
    ],
    summary:
      'Vistorias presenciais e tecnologia para identificar irregularidades, reduzir riscos de multas e controlar o recebimento de combustíveis.',
  },
];

export function servicesByCategory(category: Service['category']): Service[] {
  return SERVICES.filter((s) => s.category === category);
}
