import { AbstractControl, ValidatorFn } from '@angular/forms';

export const fourDigitValidator = (input: number): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = (control.value || '').toString();
    const pattern = new RegExp(`^\\d{${input}}$`);

    const checkValid = pattern.test(value);
    return !checkValid ? { fourDigit: { value } } : null;
  };
};
export const removeLeadingZero = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = (control.value || '').toString();
    const pattern = /^0+/;
    const removeValue = value.replace(pattern, '');
    if (removeValue !== value) {
      control.setValue(removeValue, { emitEvent: false });
    }
    return null;
  };
};
export const removeLeadingSpace = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = (control.value || '').toString();
    const pattern = /\s+/g;
    const removeValue = value.replace(pattern, '');
    if (removeValue !== value) {
      control.setValue(removeValue, { emitEvent: false });
    }
    return null;
  };
};
