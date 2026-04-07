import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements AfterViewInit {

  // 🔥 FIX: move inside class
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'ASP.NET Core', level: 85 },
    { name: 'Machine Learning', level: 75 }
  ];

  ngAfterViewInit(): void {
    this.animateSkills();
  }

  animateSkills(): void {
    const bars = document.querySelectorAll<HTMLElement>('.progress-bar');

    bars.forEach((bar) => {
      const value = bar.getAttribute('data-progress');

      if (!value) return;

      gsap.to(bar, {
        width: `${value}%`,
        duration: 1.5,
        ease: 'power3.out'
      });
    });
  }
}
