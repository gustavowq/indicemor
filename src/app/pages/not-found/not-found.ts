/**
 * PÁGINA 404
 * Exibida quando o endereço não corresponde a nenhuma rota.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container text-center not-found">
        <span class="eyebrow">Erro 404</span>
        <h1 class="title-xl">Página não encontrada.</h1>
        <p class="lead">O endereço pode ter mudado ou não existe mais.</p>
        <div class="not-found__actions">
          <a class="btn btn--primary" routerLink="/"
            >Voltar para o início <app-icon name="arrow-right" [size]="18"
          /></a>
          <a class="btn btn--outline" routerLink="/contato">Fale conosco</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      padding: 40px 0;
    }
    .not-found__actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 32px;
      flex-wrap: wrap;
    }
  `,
})
export class NotFound {}
