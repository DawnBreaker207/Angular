import { AuthService } from '@/base/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = new Router();
  if (authService.Check_Valid()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
