/**
 * MODELOS DE CONTEÚDO
 * Tipos que descrevem os dados exibidos no site (serviços, prefeituras,
 * notícias, dados institucionais). O conteúdo em si fica em `src/app/data`.
 */
import { IconName } from '../../shared/components/icon/icons';

/** Agrupamento usado para organizar os serviços na tela. */
export type ServiceCategory = 'inteligencia-fiscal' | 'gestao-fiscalizacao' | 'postos-combustiveis';

export interface ServiceCategoryInfo {
  id: ServiceCategory;
  label: string;
  description: string;
}

export interface Service {
  /** Usado como âncora (/servicos#slug) e no formulário de cotação. */
  slug: string;
  name: string;
  /** Subtítulo. Pode ficar vazio enquanto o serviço não tiver descrição definida. */
  fullName: string;
  category: ServiceCategory;
  icon: IconName;
  /** Público principal (exibido como etiqueta no card). */
  audience: string;
  /** Texto principal. Pode ficar vazio enquanto o serviço não tiver descrição definida. */
  description: string;
  highlightsTitle: string;
  highlights: string[];
  /** Resumo curto para os cards da página inicial. */
  summary: string;
  /** Quando true, a tela mostra o aviso de "detalhes em breve". */
  comingSoon?: boolean;
}

export interface Prefeitura {
  slug: string;
  name: string;
  uf: 'GO' | 'MT';
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** Data no formato ISO (AAAA-MM-DD). */
  date: string;
  category: string;
  featured?: boolean;
  url: string;
}

export interface IconText {
  icon: IconName;
  title: string;
  text?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
