import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() formControl!: FormControl;
  @Input() errorMessages: { [key: string]: string } = {};

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  getErrorInput(): { key: string; value: string }[] {
    const errors = this.formControl.errors || {};
    return Object.keys(errors).map((key) => ({ key, value: errors[key] }));
  }
}
