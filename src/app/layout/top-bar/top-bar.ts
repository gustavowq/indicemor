/**
 * TOP BAR
 * Faixa preta acima do cabeçalho com posicionamento, telefone, e-mail e redes.
 * Fica oculta no celular para economizar espaço (os contatos estão no menu).
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY } from '../../data/company.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-top-bar',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="top-bar">
      <div class="container top-bar__inner">
        <span class="top-bar__item">
          <app-icon name="landmark" [size]="15" /> Assessoria Contábil e Financeira para a gestão
          pública municipal
        </span>

        <div class="top-bar__right">
          <a class="top-bar__item" [href]="company.phoneHref"
            ><app-icon name="phone" [size]="14" /> {{ company.phoneDisplay }}</a
          >
          <a class="top-bar__item" [href]="'mailto:' + company.email"
            ><app-icon name="mail" [size]="14" /> {{ company.email }}</a
          >
          <span class="top-bar__social">
            @if (company.social.instagram) {
              <a
                [href]="company.social.instagram"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                ><app-icon name="instagram" [size]="15"
              /></a>
            }
            @if (company.social.linkedin) {
              <a
                [href]="company.social.linkedin"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                ><app-icon name="linkedin" [size]="15"
              /></a>
            }
            <a [href]="company.whatsappHref" target="_blank" rel="noopener" aria-label="WhatsApp"
              ><app-icon name="message-circle" [size]="15"
            /></a>
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './top-bar.scss',
})
export class TopBar {
  protected readonly company = COMPANY;
}
