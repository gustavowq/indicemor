/**
 * HOME › POR QUE ISSO IMPORTA
 * Mostra onde a melhoria da arrecadação vira investimento (texto da página Serviços).
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMPACT_AREAS, IMPACT_TEXT } from '../../../../data/institutional.data';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-impact-section',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--surface section--tight">
      <div class="container split impact">
        <div>
          <span class="eyebrow">Por que isso importa</span>
          <h2 class="title-xl">Cada ponto no índice é investimento direto na população.</h2>
          <p class="lead">{{ text }}</p>
        </div>

        <ul class="impact__areas">
          @for (area of areas; track area.title; let i = $index) {
            <li class="card impact__area">
              <span class="icon-box" [class.icon-box--green]="i === 0 || i === 3"
                ><app-icon [name]="area.icon" [size]="24"
              /></span>
              <strong>{{ area.title }}</strong>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .impact {
      grid-template-columns: 1.1fr 1fr;
      gap: 64px;
    }
    .impact__areas {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .impact__area {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 26px;
    }
    .impact__area strong {
      font-size: 19px;
      color: var(--c-ink);
      line-height: 1.35;
    }
    @media (max-width: 600px) {
      .impact {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .impact__areas {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ImpactSection {
  protected readonly text = IMPACT_TEXT;
  protected readonly areas = IMPACT_AREAS;
}
