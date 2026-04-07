import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {

  isDark = true;
  isMenuOpen = false;

  // 🌙 Theme toggle
  toggleTheme(): void {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }

  // 🍔 Open/Close menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ❗ FIX: This was missing
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
