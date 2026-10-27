/**
 * MENSAGENS DE ERRO DOS FORMULÁRIOS
 * Mostra o erro de um campo só depois que o usuário interagiu com ele
 * ou tentou enviar o formulário.
 */
import { FormGroup } from '@angular/forms';
import { errorMessage } from './form.validators';

export type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export function fieldError(form: FormGroup, name: string, submitted: boolean): string {
  const control = form.get(name);
  if (!control || control.valid) return '';
  return control.touched || submitted ? errorMessage(control) : '';
}
