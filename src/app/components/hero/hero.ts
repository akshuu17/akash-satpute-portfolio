import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  private particles!: THREE.Points;
  private animationId!: number;
  private typingInterval!: any;
  private clickCount = 0;

  ngAfterViewInit(): void {
    this.initThree();
    this.startTyping();
    this.initAnimations();
    this.secretEasterEgg();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    clearInterval(this.typingInterval);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  // 🔥 SCROLL FUNCTION (FIXED ✅)
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  // 🔥 GSAP Animations
  initAnimations(): void {
    gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1 });
    gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 1, delay: 0.6 });
  }

  // 🌌 Three.js Background
  initThree(): void {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const particlesCount = 1500;

    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.02 });

    this.particles = new THREE.Points(geometry, material);
    scene.add(this.particles);

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      this.particles.rotation.y += 0.0008;
      this.particles.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('mousemove', this.handleMouseMove);

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  }

  handleMouseMove = (event: MouseEvent) => {
    if (!this.particles) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    this.particles.rotation.y = x * 0.5;
    this.particles.rotation.x = y * 0.5;
  };

  // 🔥 Typing Animation
  startTyping(): void {
    const roles = [
      'Full Stack Developer',
      'Flutter Developer',
      'Software Developer',
      'Data Analyst',
      'Machine Learning Engineer',
      'Mobile Application Developer'
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    const element = document.querySelector('.typing') as HTMLElement;
    if (!element) return;

    this.typingInterval = setInterval(() => {
      const current = roles[i];

      element.innerText = isDeleting
        ? current.substring(0, j--)
        : current.substring(0, j++);

      if (!isDeleting && j === current.length) {
        isDeleting = true;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    }, 100);
  }

  // 🤫 Easter Egg
  secretEasterEgg(): void {
    document.addEventListener('click', () => {
      this.clickCount++;

      if (this.clickCount === 5) {
        alert('🚀 You found the hidden feature! Welcome, Developer 😎');
        this.clickCount = 0;
      }
    });
  }
}
