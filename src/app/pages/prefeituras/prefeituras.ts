/**
 * PÁGINA PREFEITURAS
 * Logos das prefeituras atendidas, missão com os municípios,
 * formas de apoio e compromisso de parceria.
 */
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PREFEITURAS_COMMITMENT,
  PREFEITURAS_PARAGRAPHS,
  SUPPORT_ITEMS,
} from '../../data/institutional.data';
import { PREFEITURAS, STATE_NAMES } from '../../data/prefeituras.data';
import { CtaBand } from '../../shared/components/cta-band/cta-band';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-prefeituras',
  imports: [NgOptimizedImage, PageHero, CtaBand, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prefeituras.html',
  styleUrl: './prefeituras.scss',
})
export class Prefeituras {
  protected readonly prefeituras = PREFEITURAS;
  protected readonly stateNames = STATE_NAMES;
  protected readonly paragraphs = PREFEITURAS_PARAGRAPHS;
  protected readonly supportItems = SUPPORT_ITEMS;
  protected readonly commitment = PREFEITURAS_COMMITMENT;
}
