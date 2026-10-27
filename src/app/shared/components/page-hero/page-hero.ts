/**
 * PAGE HERO
 * Faixa azul do topo das páginas internas: trilha de navegação, sobretítulo,
 * título (H1 da página) e texto de apoio. Aceita conteúdo extra via <ng-content>
 * (ex.: chips de serviços ou campo de busca).
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.scss',
})
export class PageHero {
  readonly breadcrumb = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>('');
  /** Esconde a cantoneira inferior quando o hero tem conteúdo extra (ex.: muitos chips). */
  readonly bottomCorner = input(true);
}
