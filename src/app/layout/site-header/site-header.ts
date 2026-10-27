/**
 * CABEÇALHO
 * Logo original, menu principal (mesmos itens do site atual) e os botões
 * "Login" e "Solicitar Cotação". No celular o menu vira um painel aberto pelo
 * botão de hambúrguer e fecha sozinho ao trocar de página.
 */
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { COMPANY } from '../../data/company.data';
import { MAIN_NAV, QUOTE_LINK } from '../../data/navigation.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly nav = MAIN_NAV;
  protected readonly quote = QUOTE_LINK;
  protected readonly company = COMPANY;
  protected readonly menuOpen = signal(false);

  constructor() {
    // Fecha o menu do celular sempre que a navegação termina
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
