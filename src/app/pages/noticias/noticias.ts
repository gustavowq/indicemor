/**
 * PÁGINA NOTÍCIAS
 * Publicação em destaque + demais publicações, com busca por título e resumo.
 */
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { POSTS } from '../../data/posts.data';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-noticias',
  imports: [DatePipe, PageHero, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './noticias.html',
  styleUrl: './noticias.scss',
})
export class Noticias {
  protected readonly query = signal('');

  /** Publicações filtradas pela busca, da mais recente para a mais antiga. */
  private readonly filtered = computed(() => {
    const q = this.normalize(this.query());
    return [...POSTS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((p) => !q || this.normalize(`${p.title} ${p.excerpt}`).includes(q));
  });

  protected readonly featured = computed(() => this.filtered().find((p) => p.featured) ?? null);
  protected readonly others = computed(() => this.filtered().filter((p) => p !== this.featured()));

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  /** Ignora acentos e maiúsculas na busca. */
  private normalize(text: string): string {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  }
}
