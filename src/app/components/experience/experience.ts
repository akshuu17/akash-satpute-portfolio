import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {

  experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Prismplus Technosoft',
      year: 'Dec 2025 – Present',
      points: [
        'Developed Angular + ASP.NET Core applications',
        'Built REST APIs and integrated SQL Server',
        'Improved system performance by 20%',
        'Worked in Agile development environment'
      ]
    },
    {
      role: 'Data Science & AI Intern',
      company: 'Racksoft Developers Pvt. Ltd.',
      year: 'Jun 2024 – Jul 2024',
      points: [
        'Analyzed 20,000+ data records',
        'Built ML models with accuracy evaluation',
        'Delivered insights for business decisions'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Wofox Services Pvt. Ltd.',
      year: 'Aug 2023',
      points: [
        'Developed 10+ responsive web pages',
        'Reduced UI bugs by 30%',
        'Used Git & GitHub for version control'
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.animateTimeline();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  animateTimeline(): void {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
      },
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out'
    });
  }
}
