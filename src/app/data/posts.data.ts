/**
 * NOTÍCIAS
 * Publicações reais do site atual. Os posts de exemplo ("POST 1" e "POST 2")
 * não foram migrados. Para integrar com o WordPress, este arquivo pode ser
 * substituído por uma chamada à API REST (/wp-json/wp/v2/posts).
 */
import { Post } from '../core/models/content.models';

export const POSTS: Post[] = [
  {
    slug: 'entenda-o-valor-adicionado-fiscal-no-brasil',
    title: 'Entenda o Valor Adicionado Fiscal no Brasil',
    excerpt:
      'Você sabia que um único índice econômico decide o destino de 25% de toda a arrecadação estadual no país? Esse montante bilionário é distribuído aos municípios.',
    date: '2026-03-22',
    category: 'Notícias',
    featured: true,
    url: 'https://indicemor.com.br/noticias/',
  },
  {
    slug: 'a-indice-mor',
    title: 'A Índice Mor',
    excerpt:
      'Somos uma empresa especializada em soluções estratégicas para a gestão pública municipal, com foco em apoiar prefeituras na modernização administrativa, otimização de recursos e melhoria dos serviços prestados à população.',
    date: '2026-02-23',
    category: 'Notícias',
    url: 'https://indicemor.com.br/noticias/',
  },
];
