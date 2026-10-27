/**
 * PÁGINA QUEM SOMOS
 * Atuação, diferenciais, missão, visão, valores e dados cadastrais da empresa.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconText } from '../../core/models/content.models';
import { COMPANY } from '../../data/company.data';
import { ABOUT_PARAGRAPHS, MISSION, VALUES, VISION } from '../../data/institutional.data';
import { CtaBand } from '../../shared/components/cta-band/cta-band';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-quem-somos',
  imports: [PageHero, CtaBand, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.scss',
})
export class QuemSomos {
  protected readonly paragraphs = ABOUT_PARAGRAPHS;
  protected readonly mission = MISSION;
  protected readonly vision = VISION;
  protected readonly values = VALUES;

  protected readonly differentials: IconText[] = [
    {
      icon: 'bar-chart',
      title: 'Inteligência Fiscal Aplicada à Gestão Municipal',
      text: 'Ampliar receitas, corrigir distorções e fortalecer a autonomia financeira das prefeituras.',
    },
    {
      icon: 'search',
      title: 'Especialização técnica',
      text: 'IPM, ITR, ISS e Auditoria Fiscal Estratégica.',
    },
    {
      icon: 'users',
      title: 'Lado a lado com a gestão',
      text: 'Prefeitos, secretários e equipes técnicas.',
    },
  ];

  protected readonly companyFacts = [
    { label: 'CNPJ', value: COMPANY.cnpj },
    { label: 'Estados atendidos', value: COMPANY.statesServed.join(' e ') },
    { label: 'Endereço', value: `${COMPANY.address.complement} — Sala 09` },
    { label: 'Atendimento', value: 'Segunda a sexta, 08:00 às 18:00' },
  ];
  protected readonly legalName = COMPANY.legalName;
}
