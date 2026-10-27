/**
 * PÁGINA CONTATO
 * Canais de atendimento, formulário "Envie um e-mail" (mesmos campos do site
 * atual), mapa ilustrativo com link para o Google Maps, horários e redes.
 */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { IconName } from '../../shared/components/icon/icons';
import { FormSubmissionService } from '../../core/services/form-submission.service';
import { fieldError, SubmitState } from '../../core/validators/form-errors';
import { brPhoneValidator } from '../../core/validators/form.validators';
import { COMPANY } from '../../data/company.data';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

interface Channel {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  green: boolean;
}

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, NgxMaskDirective, PageHero, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  private readonly fb = inject(FormBuilder);
  private readonly submission = inject(FormSubmissionService);

  protected readonly company = COMPANY;
  protected readonly state = signal<SubmitState>('idle');
  protected readonly submitted = signal(false);

  protected readonly channels: Channel[] = [
    {
      icon: 'message-circle',
      label: 'WhatsApp',
      value: COMPANY.phoneDisplay,
      href: COMPANY.whatsappHref,
      green: true,
    },
    {
      icon: 'phone',
      label: 'Telefone',
      value: COMPANY.phoneDisplay,
      href: COMPANY.phoneHref,
      green: false,
    },
    {
      icon: 'mail',
      label: 'E-mail',
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      green: false,
    },
    {
      icon: 'clock',
      label: 'Horário',
      value: 'Seg. a sex., 08:00 às 18:00',
      href: '',
      green: true,
    },
  ];

  // --- Formulário -----------------------------------------------------------
  protected readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required, brPhoneValidator()]],
    email: ['', [Validators.required, Validators.email]],
    assunto: ['', Validators.required],
    mensagem: ['', Validators.required],
  });

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
    this.submission.submit('contact', this.form.getRawValue()).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset();
        this.submitted.set(false);
      },
      error: () => this.state.set('error'),
    });
  }
}
