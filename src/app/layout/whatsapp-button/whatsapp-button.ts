/**
 * BOTÃO FLUTUANTE DO WHATSAPP
 * Atalho fixo no canto da tela, presente também no site atual.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY } from '../../data/company.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-whatsapp-button',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="wa" [href]="href" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">
      <app-icon name="message-circle" [size]="28" />
    </a>
  `,
  styles: `
    .wa {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 60;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #25d366;
      color: #fff;
      box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.35);
      transition: transform 0.15s ease;
    }
    .wa:hover {
      transform: scale(1.06);
    }
  `,
})
export class WhatsappButton {
  protected readonly href = COMPANY.whatsappHref;
}
