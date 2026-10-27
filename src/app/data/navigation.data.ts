/**
 * NAVEGAÇÃO
 * Mesmos itens e nomes do menu do site atual.
 * "Solicitar Cotação" e "Login" aparecem como botões no cabeçalho.
 */
import { NavItem } from '../core/models/content.models';

export const MAIN_NAV: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Prefeituras', path: '/prefeituras' },
  { label: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
  { label: 'Notícias', path: '/noticias' },
  { label: 'Contato', path: '/contato' },
];

export const QUOTE_LINK: NavItem = { label: 'Solicitar Cotação', path: '/solicitar-cotacao' };

/** Links do rodapé (coluna "Links úteis"), na mesma ordem do site atual. */
export const FOOTER_NAV: NavItem[] = [
  MAIN_NAV[0],
  MAIN_NAV[1],
  MAIN_NAV[2],
  MAIN_NAV[3],
  QUOTE_LINK,
  MAIN_NAV[4],
  MAIN_NAV[5],
  MAIN_NAV[6],
];
