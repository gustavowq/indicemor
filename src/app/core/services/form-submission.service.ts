/**
 * ENVIO DE FORMULÁRIOS
 * Centraliza o envio de Cotação, Contato e Trabalhe Conosco.
 * Os destinos ficam em `environment.formEndpoints`. Sem endpoint configurado,
 * o envio é simulado para permitir testar a interface.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export type FormKind = keyof typeof environment.formEndpoints;

@Injectable({ providedIn: 'root' })
export class FormSubmissionService {
  private readonly http = inject(HttpClient);

  /** Envia dados simples como JSON. */
  submit(kind: FormKind, payload: Record<string, unknown>): Observable<unknown> {
    const endpoint = environment.formEndpoints[kind];
    if (!endpoint) {
      return this.simulate(kind, payload);
    }
    return this.http.post(endpoint, payload);
  }

  /** Envia dados com arquivo anexo (multipart/form-data). */
  submitWithFile(
    kind: FormKind,
    payload: Record<string, string>,
    file: File,
    fileField = 'curriculo',
  ): Observable<unknown> {
    const endpoint = environment.formEndpoints[kind];
    if (!endpoint) {
      return this.simulate(kind, { ...payload, [fileField]: file.name });
    }
    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) => body.append(key, value));
    body.append(fileField, file, file.name);
    return this.http.post(endpoint, body);
  }

  private simulate(kind: FormKind, payload: Record<string, unknown>): Observable<unknown> {
    console.info(`[formulário: ${kind}] endpoint não configurado — envio simulado`, payload);
    return of({ ok: true }).pipe(delay(700));
  }
}
