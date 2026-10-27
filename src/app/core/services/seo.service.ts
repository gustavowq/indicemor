/**
 * SEO
 * A cada navegação, lê `data.seo` da rota ativa e atualiza meta description,
 * tags Open Graph e link canônico. O <title> é definido pela propriedade
 * `title` de cada rota (recurso nativo do Angular Router).
 * Funciona também no prerender, então as páginas estáticas já saem com as tags.
 */
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SeoData {
  description: string;
  /** Imagem para compartilhamento (opcional). */
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  /** Chamado uma única vez pelo componente raiz. */
  init(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.apply());
  }

  private apply(): void {
    // Pega a rota mais profunda (página atual)
    let current = this.route;
    while (current.firstChild) {
      current = current.firstChild;
    }

    const seo = current.snapshot.data['seo'] as SeoData | undefined;
    // Usa o título da rota (o <title> do documento pode ainda não ter sido atualizado)
    const title = current.snapshot.title ?? this.document.title;
    const path = this.router.url.split(/[?#]/)[0];
    const url = `${environment.siteUrl}${path === '/' ? '' : path}`;

    if (seo) {
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
    }
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({
      property: 'og:image',
      content: `${environment.siteUrl}/${seo?.image ?? 'images/og-indicemor.png'}`,
    });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
