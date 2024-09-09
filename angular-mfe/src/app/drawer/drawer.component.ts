import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  isOpen = false;

  constructor(private router: Router) {}

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

  handleLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('keepLogin');
    const baseUrl = window.location.origin;
    const loginUrl = `${baseUrl}/login`;
    window.location.href = loginUrl;
  }
}
