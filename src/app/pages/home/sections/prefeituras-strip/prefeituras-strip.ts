/**
 * HOME › FAIXA DE PREFEITURAS
 * Logos reais das prefeituras atendidas logo abaixo do hero (prova social).
 */
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PREFEITURAS } from '../../../../data/prefeituras.data';

@Component({
  selector: 'app-prefeituras-strip',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="strip" aria-label="Prefeituras que atendemos">
      <div class="container strip__inner">
        <h2 class="strip__label">Prefeituras que atendemos</h2>
        <ul class="strip__logos">
          @for (p of prefeituras; track p.slug) {
            <li>
              <img
                [ngSrc]="p.logo"
                [width]="p.logoWidth"
                [height]="p.logoHeight"
                [alt]="'Prefeitura de ' + p.name"
              />
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './prefeituras-strip.scss',
})
export class PrefeiturasStrip {
  protected readonly prefeituras = PREFEITURAS;
}
