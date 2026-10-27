/**
 * HOME › ÚLTIMAS NOTÍCIAS
 * Exibe as duas publicações mais recentes.
 */
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { POSTS } from '../../../../data/posts.data';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-latest-news',
  imports: [RouterLink, DatePipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.html',
  styleUrl: './latest-news.scss',
})
export class LatestNews {
  protected readonly posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
}
