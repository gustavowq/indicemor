/**
 * MAPA DO BRASIL
 * Desenha o mapa em SVG e destaca os estados informados em `highlighted`
 * (siglas em minúsculas). Para incluir um novo estado atendido, basta
 * adicionar a sigla e a posição do rótulo em LABEL_POSITIONS.
 */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from './brazil-states.data';

/** Posição (no viewBox do mapa) do rótulo de cada estado destacado. */
const LABEL_POSITIONS: Record<string, { x: number; y: number }> = {
  mt: { x: 282, y: 290 },
  go: { x: 372, y: 350 },
};

@Component({
  selector: 'app-brazil-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: block;
    }
    svg {
      width: 100%;
      height: auto;
    }
    .state {
      fill: #dce3eb;
      stroke: #fff;
      stroke-width: 1.4;
      transition: fill 0.2s ease;
    }
    .state--on {
      fill: var(--c-green);
    }
    .label {
      font-family: var(--font-base);
      font-weight: 900;
      fill: #fff;
      text-anchor: middle;
    }
  `,
  template: `
    <svg [attr.viewBox]="viewBox" role="img" [attr.aria-label]="ariaLabel()">
      @for (state of states; track state.id) {
        <svg:path class="state" [class.state--on]="isOn(state.id)" [attr.d]="state.path">
          <svg:title>{{ state.name }}</svg:title>
        </svg:path>
      }
      @for (label of labels(); track label.id) {
        <svg:text class="label" [attr.x]="label.x" [attr.y]="label.y" [attr.font-size]="22">
          {{ label.id.toUpperCase() }}
        </svg:text>
      }
    </svg>
  `,
})
export class BrazilMap {
  readonly highlighted = input<string[]>([]);

  protected readonly viewBox = BRAZIL_VIEWBOX;
  protected readonly states = BRAZIL_STATES;

  protected readonly labels = computed(() =>
    this.highlighted()
      .filter((id) => LABEL_POSITIONS[id])
      .map((id) => ({ id, ...LABEL_POSITIONS[id] })),
  );

  protected readonly ariaLabel = computed(() => {
    const names = BRAZIL_STATES.filter((s) => this.highlighted().includes(s.id)).map((s) => s.name);
    return `Mapa do Brasil com destaque para: ${names.join(', ')}`;
  });

  protected isOn(id: string): boolean {
    return this.highlighted().includes(id);
  }
}
