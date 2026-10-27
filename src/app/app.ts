/**
 * COMPONENTE RAIZ
 * Monta a estrutura fixa do site (faixa superior, cabeçalho, rodapé e botão
 * do WhatsApp) e o <router-outlet> onde cada página é exibida.
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { TopBar } from './layout/top-bar/top-bar';
import { WhatsappButton } from './layout/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, SiteHeader, SiteFooter, WhatsappButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <app-top-bar />
    <app-site-header />
    <main id="conteudo">
      <router-outlet />
    </main>
    <app-site-footer />
    <app-whatsapp-button />
  `,
  styles: `
    .skip-link {
      position: absolute;
      left: 16px;
      top: -60px;
      z-index: 100;
      padding: 10px 16px;
      border-radius: 8px;
      background: var(--c-blue);
      color: #fff;
      font-weight: 700;
    }
    .skip-link:focus {
      top: 12px;
    }
  `,
})
export class App {
  constructor() {
    inject(SeoService).init();
  }
}
