/**
 * VÍDEO (carregamento sob demanda)
 * Mostra uma capa leve e só carrega o player do YouTube quando o visitante
 * clica em "play". Isso deixa a página mais rápida e evita cookies de terceiros
 * antes da interação (usa o domínio youtube-nocookie.com).
 */
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-video-player',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss',
})
export class VideoPlayer {
  private readonly sanitizer = inject(DomSanitizer);

  readonly youtubeId = input.required<string>();
  readonly title = input('ÍndiceMor — Soluções para a Gestão Pública');
  readonly eyebrow = input('Vídeo institucional');

  protected readonly playing = signal(false);

  protected readonly embedUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.youtubeId()}?autoplay=1&rel=0`,
    ),
  );

  protected play(): void {
    this.playing.set(true);
  }
}
