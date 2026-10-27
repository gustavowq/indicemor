/**
 * PÁGINA SOLICITAR COTAÇÃO
 * Formulário de pedido de cotação (mesmos campos do site atual + município e
 * serviços de interesse). Aceita ?servico=slug na URL para já marcar o serviço
 * escolhido nos botões da página Serviços.
 */
import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { FormSubmissionService } from '../../core/services/form-submission.service';
import { fieldError, SubmitState } from '../../core/validators/form-errors';
import { brPhoneValidator } from '../../core/validators/form.validators';
import { COMPANY } from '../../data/company.data';
import { SERVICES } from '../../data/services.data';
import { Icon } from '../../shared/components/icon/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitar-cotacao',
  imports: [ReactiveFormsModule, NgxMaskDirective, RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solicitar-cotacao.html',
  styleUrl: './solicitar-cotacao.scss',
})
export class SolicitarCotacao {
  private readonly fb = inject(FormBuilder);
  private readonly submission = inject(FormSubmissionService);

  /** Preenchido automaticamente a partir de ?servico= na URL. */
  readonly servico = input<string>();

  protected readonly services = SERVICES;
  protected readonly company = COMPANY;
  protected readonly state = signal<SubmitState>('idle');
  protected readonly submitted = signal(false);

  // --- Formulário -----------------------------------------------------------
  protected readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required, brPhoneValidator()]],
    email: ['', [Validators.required, Validators.email]],
    municipio: [''],
    servicos: [[] as string[]],
    assunto: ['', Validators.required],
    mensagem: [''],
  });

  constructor() {
    // Pré-seleciona o serviço vindo da URL
    effect(() => {
      const slug = this.servico();
      if (slug && SERVICES.some((s) => s.slug === slug)) {
        this.form.controls.servicos.setValue([slug]);
      }
    });
  }

  protected isSelected(slug: string): boolean {
    return this.form.controls.servicos.value.includes(slug);
  }

  protected toggleService(slug: string): void {
    const current = this.form.controls.servicos.value;
    this.form.controls.servicos.setValue(
      current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug],
    );
  }

  protected error(name: string): string {
    return fieldError(this.form, name, this.submitted());
  }

  // --- Envio ------------------------------------------------------------------
  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('sending');
    this.submission.submit('quote', this.form.getRawValue()).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset();
        this.submitted.set(false);
      },
      error: () => this.state.set('error'),
    });
  }
}
