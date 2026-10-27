/**
 * ROTAS NO BUILD (PRERENDER)
 * Todas as páginas são geradas como HTML estático no build. Isso garante que
 * o Google receba o conteúdo completo, e o site pode ser hospedado em qualquer
 * servidor de arquivos estáticos.
 */
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
