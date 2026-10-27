/**
 * CTA BAND
 * Bloco azul de chamada para ação exibido no fim das páginas.
 * Botão principal leva a uma rota interna; o secundário pode ser WhatsApp
 * (link externo) ou outra rota interna.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../data/company.data';
import { QUOTE_LINK } from '../../../data/navigation.data';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.scss',
})
export class CtaBand {
  readonly title = input.required<string>();
  readonly text = input<string>('');
  readonly primaryLabel = input(QUOTE_LINK.label);
  readonly primaryPath = input(QUOTE_LINK.path);
  /** Quando informado, o botão secundário vira um link interno em vez do WhatsApp. */
  readonly secondaryPath = input<string | null>(null);
  readonly secondaryLabel = input('Falar no WhatsApp');

  protected readonly whatsappHref = COMPANY.whatsappHref;
}
