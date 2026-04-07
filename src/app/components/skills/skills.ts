import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements AfterViewInit {

  skills = [
    { name: 'Angular', category: 'Frontend', level: 90 },
    { name: 'HTML5 / CSS3', category: 'Frontend', level: 90 },
    { name: 'JavaScript', category: 'Frontend', level: 85 },
    { name: 'Bootstrap', category: 'Frontend', level: 80 },

    { name: 'ASP.NET Core', category: 'Backend', level: 85 },
    { name: 'REST APIs', category: 'Backend', level: 85 },

    { name: 'Flutter', category: 'Mobile', level: 80 },

    { name: 'Python', category: 'Programming', level: 85 },
    { name: 'C#', category: 'Programming', level: 80 },

    { name: 'MySQL / SQL Server', category: 'Database', level: 80 },
    { name: 'Firebase', category: 'Database', level: 75 },

    { name: 'Machine Learning', category: 'AI/ML', level: 75 }
  ];

  ngAfterViewInit(): void {
    this.animateBars();
  }

  animateBars(): void {
    const bars = document.querySelectorAll<HTMLElement>('.bar-fill');

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
