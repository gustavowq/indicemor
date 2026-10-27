/**
 * PÁGINA INICIAL
 * Apenas organiza a ordem das seções; cada seção é um componente próprio
 * em ./sections, o que facilita reordenar ou editar uma parte isoladamente.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY } from '../../data/company.data';
import { CtaBand } from '../../shared/components/cta-band/cta-band';
import { VideoPlayer } from '../../shared/components/video-player/video-player';
import { AboutPreview } from './sections/about-preview/about-preview';
import { HomeHero } from './sections/home-hero/home-hero';
import { ImpactSection } from './sections/impact-section/impact-section';
import { LatestNews } from './sections/latest-news/latest-news';
import { PrefeiturasStrip } from './sections/prefeituras-strip/prefeituras-strip';
import { ServicesPreview } from './sections/services-preview/services-preview';
import { StatesServed } from './sections/states-served/states-served';

@Component({
  selector: 'app-home',
  imports: [
    HomeHero,
    PrefeiturasStrip,
    AboutPreview,
    ImpactSection,
    ServicesPreview,
    VideoPlayer,
    StatesServed,
    LatestNews,
    CtaBand,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-home-hero />
    <app-prefeituras-strip />
    <app-about-preview />
    <app-impact-section />
    <app-services-preview />

    <!-- Vídeo institucional -->
    <section class="section section--flush-top">
      <div class="container">
        <app-video-player [youtubeId]="youtubeId" />
      </div>
    </section>

    <app-states-served />
    <app-latest-news />
    <app-cta-band
      title="Junte-se às prefeituras que já estão transformando a administração pública."
      text="Soluções inteligentes, práticas e que fazem a diferença no dia a dia da gestão municipal. Envie seu pedido de cotação."
    />
  `,
})
export class Home {
  protected readonly youtubeId = COMPANY.youtubeId;
}
