import { User } from '@/base/interfaces/common';
import {
  removeLeadingSpace,
  removeLeadingZero,
} from '@/base/validators/validators';
import { AuthActions } from '@/state/auth/auth.actions';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
  registerForm = new FormGroup({
    name: new FormControl('', [removeLeadingSpace()]),
    email: new FormControl('', [
      removeLeadingSpace(),
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      removeLeadingSpace(),
      removeLeadingZero(),
    ]),
  });
  getFormControl(name: string): FormControl {
    return this.registerForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const register: User = { ...(this.registerForm.value as User) };
      this.store.dispatch(AuthActions.loadRegister({ user: register }));
      this.router.navigate(['/login']);
    }
  }
}
