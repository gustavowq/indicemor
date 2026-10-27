/**
 * HOME › QUEM SOMOS (resumo)
 * Citação de parceria com a gestão pública + resumo institucional e diferenciais.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT_PARAGRAPHS, DIFFERENTIALS } from '../../../../data/institutional.data';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-about-preview',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss',
})
export class AboutPreview {
  protected readonly intro = ABOUT_PARAGRAPHS[0];
  protected readonly commitment =
    'Respeitamos as particularidades orçamentárias, estruturais e sociais de cada município. Nosso compromisso é transformar desafios em resultados concretos, com responsabilidade técnica, transparência e foco em impacto social.';
  protected readonly partnership = ABOUT_PARAGRAPHS[2];
  protected readonly differentials = DIFFERENTIALS;
}
