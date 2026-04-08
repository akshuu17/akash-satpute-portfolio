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
    { name: 'Angular', category: 'Frontend', level: 75 },
    { name: 'HTML5 / CSS3', category: 'Frontend', level: 90 },
    { name: 'JavaScript', category: 'Frontend', level: 75 },
    { name: 'Bootstrap', category: 'Frontend', level: 60 },

    { name: 'ASP.NET Core', category: 'Backend', level: 75 },
    { name: 'REST APIs', category: 'Backend', level: 75 },

    { name: 'Flutter', category: 'Mobile', level: 90 },

    { name: 'Python', category: 'Programming', level: 75 },
    { name: 'C#', category: 'Programming', level: 75 },

    { name: 'MySQL / SQL Server', category: 'Database', level: 70 },
    { name: 'Firebase', category: 'Database', level: 75 },

    { name: 'Data Analysis', category: 'Analytics', level: 80 },
    { name: 'Excel', category: 'Analytics', level: 70 },

    { name: 'Data Science', category: 'Analytics', level: 50 },
    { name: 'Machine Learning', category: 'AI/ML', level: 80 },

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
