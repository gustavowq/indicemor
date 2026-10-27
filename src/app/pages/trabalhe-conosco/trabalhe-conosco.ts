/**
 * PÁGINA TRABALHE CONOSCO
 * Áreas de atuação (as mesmas do site atual) e formulário de envio de
 * currículo com anexo (PDF, DOC ou DOCX até 5 MB), por clique ou arrastando.
 */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { FormSubmissionService } from '../../core/services/form-submission.service';
import { fieldError, SubmitState } from '../../core/validators/form-errors';
import { brPhoneValidator, fileValidator } from '../../core/validators/form.validators';
import { CAREER_AREAS, VALUES } from '../../data/institutional.data';
import { Icon } from '../../shared/components/icon/icon';
import { PageHero } from '../../shared/components/page-hero/page-hero';

const ALLOWED_FILES = ['pdf', 'doc', 'docx'];
const MAX_FILE_MB = 5;

@Component({
  selector: 'app-trabalhe-conosco',
  imports: [ReactiveFormsModule, NgxMaskDirective, PageHero, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './trabalhe-conosco.html',
  styleUrl: './trabalhe-conosco.scss',
})
export class TrabalheConosco {
  private readonly fb = inject(FormBuilder);
  private readonly submission = inject(FormSubmissionService);

  protected readonly areas = CAREER_AREAS;
  protected readonly valuesSummary = VALUES.map((v) => v.title.toLowerCase()).join(', ');
  protected readonly state = signal<SubmitState>('idle');
  protected readonly submitted = signal(false);
  protected readonly dragging = signal(false);

  // --- Formulário -----------------------------------------------------------
  protected readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    telefone: ['', [Validators.required, brPhoneValidator()]],
    email: ['', [Validators.required, Validators.email]],
    area: ['', Validators.required],
    curriculo: new FormControl<File | null>(null, fileValidator(ALLOWED_FILES, MAX_FILE_MB)),
    mensagem: [''],
  });

  protected error(name: string): string {
    return fieldError(this.form, name, this.submitted());
  }

  // --- Anexo (clique ou arrastar e soltar) ---------------------------------
  protected onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.setFile(input.files?.item(0) ?? null);
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(false);
    this.setFile(event.dataTransfer?.files.item(0) ?? null);
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging.set(true);
  }

  private setFile(file: File | null): void {
    const control = this.form.controls.curriculo;
    control.setValue(file);
    control.markAsTouched();
  }

  // --- Envio ------------------------------------------------------------------
  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { curriculo, ...fields } = this.form.getRawValue();
    this.state.set('sending');
    this.submission.submitWithFile('career', fields, curriculo as File).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset();
        this.submitted.set(false);
      },
      error: () => this.state.set('error'),
    });
  }
}
