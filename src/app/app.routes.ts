/**
 * ROTAS
 * Mesmos endereços do site atual. Cada página é carregada sob demanda (lazy)
 * e define seu <title> e meta description (lidos pelo SeoService).
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Assessoria Contábil para Prefeituras | ÍndiceMor',
    data: {
      seo: {
        description:
          'Inteligência fiscal para prefeituras de Goiás e Mato Grosso: IPM-GO, IPM-MT, ITR, DITR, SIGMOP e mais. Solicite uma cotação.',
      },
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'quem-somos',
    title: 'Quem Somos | ÍndiceMor Assessoria Contábil e Financeira',
    data: {
      seo: {
        description:
          'Empresa especializada em soluções estratégicas para a gestão pública municipal. Conheça nossa missão, visão e valores.',
      },
    },
    loadComponent: () => import('./pages/quem-somos/quem-somos').then((m) => m.QuemSomos),
  },
  {
    path: 'servicos',
    title: 'Serviços: IPM, ITR, DITR, SIGMOP e QualyPosto | ÍndiceMor',
    data: {
      seo: {
        description:
          'IPM-GO, IPM-MT, ITR e DITR para ampliar receitas municipais, SIGMOP para gestão de obras públicas e QualyPosto para postos de combustíveis.',
      },
    },
    loadComponent: () => import('./pages/servicos/servicos').then((m) => m.Servicos),
  },
  {
    path: 'prefeituras',
    title: 'Prefeituras Atendidas em Goiás e Mato Grosso | ÍndiceMor',
    data: {
      seo: {
        description:
          'Goiânia, Senador Canedo, Hidrolândia, Aruanã e Torixoréu: conheça as prefeituras atendidas e como apoiamos a gestão municipal.',
      },
    },
    loadComponent: () => import('./pages/prefeituras/prefeituras').then((m) => m.Prefeituras),
  },
  {
    path: 'solicitar-cotacao',
    title: 'Solicitar Cotação | ÍndiceMor',
    data: {
      seo: {
        description:
          'Envie seu pedido de cotação para os serviços da ÍndiceMor. Atendimento de segunda a sexta, das 8h às 18h.',
      },
    },
    loadComponent: () =>
      import('./pages/solicitar-cotacao/solicitar-cotacao').then((m) => m.SolicitarCotacao),
  },
  {
    path: 'trabalhe-conosco',
    title: 'Trabalhe Conosco | ÍndiceMor',
    data: {
      seo: {
        description:
          'Envie seu currículo para as áreas Comercial, Financeiro, Recursos Humanos, Tecnologia, Administrativo e Marketing da ÍndiceMor.',
      },
    },
    loadComponent: () =>
      import('./pages/trabalhe-conosco/trabalhe-conosco').then((m) => m.TrabalheConosco),
  },
  {
    path: 'noticias',
    title: 'Notícias sobre Gestão Fiscal Municipal | ÍndiceMor',
    data: {
      seo: {
        description:
          'Conteúdos sobre Valor Adicionado Fiscal, índices de participação e gestão pública municipal.',
      },
    },
    loadComponent: () => import('./pages/noticias/noticias').then((m) => m.Noticias),
  },
  {
    path: 'contato',
    title: 'Contato | ÍndiceMor Assessoria Contábil e Financeira',
    data: {
      seo: {
        description:
          'Fale com a ÍndiceMor por WhatsApp, telefone ou e-mail. Trade Center, Setor Oeste, Goiânia. Segunda a sexta, das 8h às 18h.',
      },
    },
    loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
  },
  {
    path: '**',
    title: 'Página não encontrada | ÍndiceMor',
    data: { seo: { description: 'A página procurada não foi encontrada.' } },
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
