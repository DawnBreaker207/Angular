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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('', [removeLeadingSpace(), Validators.email]),
    password: new FormControl('', [
      Validators.required,
      removeLeadingSpace(),
      removeLeadingZero(),
    ]),
  });
  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = { ...this.loginForm.value };
      if (email && password) {
        this.store.dispatch(AuthActions.loadLogin({ email, password }));
        this.router.navigate(['/admin/books']);
      }
    }
  }
}
