/**
 * RODAPÉ
 * Logo (em branco), descrição, redes sociais, "Links úteis" e contato,
 * com razão social e CNPJ na linha final — mesma estrutura do site atual.
 */
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../data/company.data';
import { FOOTER_NAV } from '../../data/navigation.data';
import { SERVICES } from '../../data/services.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, NgOptimizedImage, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly company = COMPANY;
  protected readonly links = FOOTER_NAV;
  protected readonly services = SERVICES;
  protected readonly year = new Date().getFullYear();
}
