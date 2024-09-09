import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLogged = !!localStorage.getItem('user');

    if (isLogged) {
      return true;
    } else {
      const baseUrl = window.location.origin;
      const loginUrl = `${baseUrl}/login`;
      window.location.href = loginUrl;
      return false;
    }
  }
}
