import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user = localStorage.getItem('user');

  constructor(private router: Router) {}

  returnUser(): string {
    return this.user || 'User';
  }

  handleLogout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('keepLogin');
    const baseUrl = window.location.origin;
    const loginUrl = `${baseUrl}/login`;
    window.location.href = loginUrl;
  }
}
