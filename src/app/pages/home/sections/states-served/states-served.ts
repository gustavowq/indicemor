/**
 * HOME › ESTADOS QUE ATENDEMOS
 * Lista das prefeituras por estado + mapa do Brasil com GO e MT em destaque.
 * A lista em texto também ajuda o Google, que não lê o conteúdo do mapa.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PREFEITURAS, STATE_NAMES } from '../../../../data/prefeituras.data';
import { BrazilMap } from '../../../../shared/components/brazil-map/brazil-map';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-states-served',
  imports: [RouterLink, Icon, BrazilMap],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './states-served.html',
  styleUrl: './states-served.scss',
})
export class StatesServed {
  protected readonly states = (Object.keys(STATE_NAMES) as (keyof typeof STATE_NAMES)[]).map(
    (uf) => ({
      uf,
      name: STATE_NAMES[uf],
      prefeituras: PREFEITURAS.filter((p) => p.uf === uf),
    }),
  );

  protected readonly highlighted = this.states.map((s) => s.uf.toLowerCase());
}
