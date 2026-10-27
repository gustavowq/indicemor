/**
 * VALIDADORES DE FORMULÁRIO
 * Regras reutilizadas nos formulários e mensagens de erro em português.
 */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Telefone brasileiro com DDD: 10 ou 11 dígitos (ignora DDI 55). */
export function brPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const digits = String(control.value ?? '')
      .replace(/\D/g, '')
      .replace(/^55(?=\d{10,11}$)/, '');
    if (!digits) return null;
    return digits.length === 10 || digits.length === 11 ? null : { phone: true };
  };
}

/** Arquivo obrigatório com extensões e tamanho máximo permitidos. */
export function fileValidator(allowed: string[], maxMb: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File | null;
    if (!file) return { required: true };
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!allowed.includes(ext)) return { fileType: { allowed } };
    if (file.size > maxMb * 1024 * 1024) return { fileSize: { maxMb } };
    return null;
  };
}

/** Converte o primeiro erro de um campo em uma mensagem legível. */
export function errorMessage(control: AbstractControl | null): string {
  if (!control?.errors) return '';
  const e = control.errors;
  if (e['required']) return 'Campo obrigatório.';
  if (e['email']) return 'Informe um e-mail válido.';
  if (e['phone'] || e['mask']) return 'Informe um telefone com DDD.';
  if (e['minlength']) return `Use pelo menos ${e['minlength'].requiredLength} caracteres.`;
  if (e['fileType']) return `Formatos aceitos: ${e['fileType'].allowed.join(', ').toUpperCase()}.`;
  if (e['fileSize']) return `O arquivo deve ter até ${e['fileSize'].maxMb} MB.`;
  return 'Verifique este campo.';
}
