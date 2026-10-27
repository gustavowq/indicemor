/**
 * TESTES DOS VALIDADORES DE FORMULÁRIO
 */
import { FormControl } from '@angular/forms';
import { brPhoneValidator, errorMessage, fileValidator } from './form.validators';

describe('brPhoneValidator', () => {
  const validate = (value: string) => brPhoneValidator()(new FormControl(value));

  it('aceita fixo e celular com DDD', () => {
    expect(validate('6232221111')).toBeNull();
    expect(validate('62998432183')).toBeNull();
    expect(validate('+55 (62) 99843-2183')).toBeNull();
  });

  it('recusa números incompletos', () => {
    expect(validate('99843-2183')).toEqual({ phone: true });
  });

  it('não valida campo vazio (o "required" cuida disso)', () => {
    expect(validate('')).toBeNull();
  });
});

describe('fileValidator', () => {
  const validator = fileValidator(['pdf'], 1);

  it('exige um arquivo', () => {
    expect(validator(new FormControl(null))).toEqual({ required: true });
  });

  it('recusa extensões não permitidas', () => {
    const file = new File(['x'], 'foto.png');
    expect(validator(new FormControl(file))).toEqual({ fileType: { allowed: ['pdf'] } });
  });

  it('recusa arquivos grandes demais', () => {
    const file = new File([new Uint8Array(2 * 1024 * 1024)], 'cv.pdf');
    expect(validator(new FormControl(file))).toEqual({ fileSize: { maxMb: 1 } });
  });

  it('gera mensagens em português', () => {
    const control = new FormControl(new File(['x'], 'foto.png'), validator);
    expect(errorMessage(control)).toBe('Formatos aceitos: PDF.');
  });
});
