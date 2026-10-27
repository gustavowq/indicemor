/**
 * HOME › SERVIÇOS
 * Cards de todos os serviços, agrupados por categoria. O primeiro grupo
 * (inteligência fiscal) ocupa uma linha inteira; os demais dividem a linha
 * seguinte proporcionalmente à quantidade de serviços de cada um.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_CATEGORIES, servicesByCategory } from '../../../../data/services.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { ServiceCard } from '../../../../shared/components/service-card/service-card';

@Component({
  selector: 'app-services-preview',
  imports: [RouterLink, Icon, ServiceCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss',
})
export class ServicesPreview {
  private readonly groups = SERVICE_CATEGORIES.map((category) => ({
    ...category,
    services: servicesByCategory(category.id),
  })).filter((g) => g.services.length > 0);

  /** Linhas da grade: [grupo principal] e [demais grupos]. */
  protected readonly rows = [this.groups.slice(0, 1), this.groups.slice(1)]
    .filter((groups) => groups.length > 0)
    .map((groups) => ({
      groups,
      columns: groups.map((g) => `${g.services.length}fr`).join(' '),
    }));
}
