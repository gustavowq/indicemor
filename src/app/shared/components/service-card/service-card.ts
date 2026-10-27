/**
 * SERVICE CARD
 * Card resumido de um serviço (página inicial). Leva para a seção do serviço
 * na página /servicos via âncora. Serviços sem descrição mostram "Em breve".
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../../core/models/content.models';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  readonly service = input.required<Service>();
  /** Alterna o destaque de cor (verde/azul) para dar ritmo à grade. */
  readonly accent = input<'green' | 'blue'>('blue');
}
