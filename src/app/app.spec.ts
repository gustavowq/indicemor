/**
 * TESTES DO COMPONENTE RAIZ
 * Garante que a estrutura fixa (cabeçalho, menu e rodapé) é renderizada.
 */
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { MAIN_NAV } from './data/navigation.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('cria a aplicação', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('exibe todos os itens do menu principal', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('.header__nav a');
    expect(links.length).toBe(MAIN_NAV.length);
  });

  it('exibe a razão social e o CNPJ no rodapé', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const footer =
      (fixture.nativeElement as HTMLElement).querySelector('footer')?.textContent ?? '';
    expect(footer).toContain('45.373.053/0001-96');
  });
});
