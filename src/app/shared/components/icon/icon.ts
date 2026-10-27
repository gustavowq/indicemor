/**
 * ÍCONE
 * Desenha um ícone da biblioteca local (icons.ts) como SVG inline.
 * Herda a cor do texto (currentColor), então basta mudar `color` no elemento pai.
 *
 * Uso: <app-icon name="phone" [size]="18" />
 */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS, IconElement, IconName } from './icons';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-icon', 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
      flex: none;
      line-height: 0;
    }
  `,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @for (el of elements(); track $index) {
        @switch (el.tag) {
          @case ('path') {
            <svg:path [attr.d]="el.d" />
          }
          @case ('circle') {
            <svg:circle [attr.cx]="el.cx" [attr.cy]="el.cy" [attr.r]="el.r" />
          }
          @case ('rect') {
            <svg:rect
              [attr.x]="el.x"
              [attr.y]="el.y"
              [attr.width]="el.width"
              [attr.height]="el.height"
              [attr.rx]="el.rx ?? null"
            />
          }
          @case ('line') {
            <svg:line [attr.x1]="el.x1" [attr.y1]="el.y1" [attr.x2]="el.x2" [attr.y2]="el.y2" />
          }
          @case ('polygon') {
            <svg:polygon
              [attr.points]="el.points"
              [attr.fill]="el.filled ? 'currentColor' : 'none'"
            />
          }
          @case ('ellipse') {
            <svg:ellipse [attr.cx]="el.cx" [attr.cy]="el.cy" [attr.rx]="el.rx" [attr.ry]="el.ry" />
          }
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly strokeWidth = input(2);

  protected readonly elements = computed<IconElement[]>(() => ICONS[this.name()] as IconElement[]);
}
