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
      title: 'PayrollPro - Employee Payroll System',
      desc: 'Angular-based payroll system with employee management, salary calculation, payslip generation and dashboard.',
      tech: 'Angular, TypeScript, Bootstrap, Chart.js',
      github: 'https://github.com/akshuu17/Employee-Payroll-Management-System',
    },
    {
      title: 'P2P Education Platform (Last-year project)',
      desc: 'Tutor-student platform with authentication, messaging and 5+ users support.',
      tech: 'Node.js, EJS, Tailwind, REST APIs',
      github: 'https://github.com/pramodsuryapeth/p2p-education-platform',
      live: 'https://p2p-education-platform.netlify.app/'
    },
    {
      title: 'AI Study Buddy',
      desc: 'AI-powered learning app with chat, notes, quiz & speech-to-text.',
      tech: 'Flutter, Firebase, Gemini AI',
    },
    {
      title: 'Martial Arts Website',
      desc: 'Responsive sports platform with schedules & announcements.',
      tech: 'HTML, CSS, JS, Bootstrap',
      github: 'https://github.com/akshuu17/karate-website',
      live: 'https://real-martial-art-sport.netlify.app/'
    },
    {
      title: 'Home Price Prediction',
      desc: 'ML model predicting house prices using real estate data.',
      tech: 'Python, Machine Learning',
      github: 'https://github.com/akshuu17/Bangalore-house-prediction',
    },
    {
      title: 'Solar Panel Dust Detection',
      desc: 'ML model to detect dust accumulation on solar panels using image data.',
      tech: 'Python, ML',
      github: 'https://github.com/akshuu17/solar-panel-dust-detection',
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
      stagger: 0.15,
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

  openLink(url: string): void {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  }
}
