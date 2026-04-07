import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <!-- 🔥 Loader -->
    <div *ngIf="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <!-- 🔥 Main App -->
    <div *ngIf="!isLoading">
      <div class="progress-bar" [style.width.%]="scrollProgress"></div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {

  scrollProgress = 0;
  isLoading = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / height) * 100;
  }
}
