import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements AfterViewInit {

  selectedProject: any = null;

  projects = [
    {
      title: 'AI Study Buddy',
      desc: 'AI-powered learning app with chat, notes, quiz & speech-to-text features.',
      tech: 'Flutter, Firebase, Gemini AI',
      github: '#'
    },
    {
      title: 'Martial Arts Website',
      desc: 'Responsive sports platform with schedules, announcements & performance optimization.',
      tech: 'HTML, CSS, JS, Bootstrap',
      github: '#'
    },
    {
      title: 'Home Price Prediction',
      desc: 'ML model trained on real estate data for accurate house price prediction.',
      tech: 'Python, Machine Learning',
      github: '#'
    }
  ];

  ngAfterViewInit(): void {
    this.animateCards();
  }

  animateCards(): void {
    gsap.set('.project-card', { opacity: 0, y: 60 });

    gsap.to('.project-card', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }

  openModal(project: any): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
