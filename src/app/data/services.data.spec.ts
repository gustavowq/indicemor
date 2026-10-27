/**
 * TESTES DO CONTEÚDO DE SERVIÇOS
 * Evita publicar um serviço sem texto por engano: só serviços marcados como
 * `comingSoon` podem ficar sem descrição.
 */
import { SERVICES, SERVICE_CATEGORIES } from './services.data';

describe('SERVICES', () => {
  it('tem slugs únicos (usados como âncora e no formulário)', () => {
    const slugs = SERVICES.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('só permite descrição vazia em serviços "em breve"', () => {
    SERVICES.filter((s) => !s.comingSoon).forEach((s) => {
      expect(s.description.length, s.slug).toBeGreaterThan(0);
      expect(s.highlights.length, s.slug).toBeGreaterThan(0);
    });
  });

  it('usa apenas categorias cadastradas', () => {
    const ids = SERVICE_CATEGORIES.map((c) => c.id);
    SERVICES.forEach((s) => expect(ids).toContain(s.category));
  });
});
