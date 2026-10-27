/**
 * PÁGINA SERVIÇOS
 * Lista todos os serviços agrupados por categoria. Cada serviço tem uma
 * âncora própria (/servicos#slug), usada pelos cards da página inicial e do rodapé.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMPACT_TEXT } from '../../data/institutional.data';
import { QUOTE_LINK } from '../../data/navigation.data';
import { SERVICES, SERVICE_CATEGORIES, servicesByCategory } from '../../data/services.data';
import { CtaBand } from '../../shared/components/cta-band/cta-band';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-servicos',
  imports: [RouterLink, PageHero, CtaBand, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss',
})
export class Servicos {
  protected readonly services = SERVICES;
  protected readonly quote = QUOTE_LINK;
  protected readonly impactText = IMPACT_TEXT;

  protected readonly categories = SERVICE_CATEGORIES.map((category) => ({
    ...category,
    services: servicesByCategory(category.id),
  })).filter((c) => c.services.length > 0);

  /** Posição global do serviço (alterna o layout texto/lista e as cores). */
  protected indexOf(slug: string): number {
    return SERVICES.findIndex((s) => s.slug === slug);
  }
}
