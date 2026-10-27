/**
 * HOME › HERO
 * Primeira dobra: proposta de valor, botões de ação, pilares da empresa e
 * o cartão ilustrativo do Índice de Participação (sem números — é apenas ilustração).
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconText } from '../../../../core/models/content.models';
import { PILLARS } from '../../../../data/institutional.data';
import { QUOTE_LINK } from '../../../../data/navigation.data';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  protected readonly quote = QUOTE_LINK;
  protected readonly pillars = PILLARS;

  /** Etapas mostradas no cartão ilustrativo (vindas das descrições dos serviços). */
  protected readonly cardItems: IconText[] = [
    { icon: 'search', title: 'Identificação de inconsistências' },
    { icon: 'check', title: 'Correção de distorções' },
    { icon: 'refresh-cw', title: 'Acompanhamento do índice' },
    { icon: 'shield-check', title: 'Segurança jurídica' },
  ];
}
