import{inject} from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authService = inject(AuthService);
  const etat=localStorage.getItem('state');
  if (authService.isAuthenticated()) {
    return true;
    }
    else {
    router.navigate(['/login']);
    return false;
    }
};