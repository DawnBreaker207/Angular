import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Output() submitForm = new EventEmitter<void>();

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.submitForm.emit();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
