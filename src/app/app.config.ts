/**
 * CONFIGURAÇÃO DA APLICAÇÃO
 * Roteador (com rolagem para âncoras e para o topo), HTTP para os formulários,
 * hidratação do conteúdo pré-renderizado, máscara de telefone (ngx-mask)
 * e idioma pt-BR para datas.
 */
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { routes } from './app.routes';

// Datas e números no formato brasileiro (ex.: "22 de março de 2026")
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideNgxMask(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
