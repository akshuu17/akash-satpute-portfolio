import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => {

  // 🔥 Custom Cursor
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const trail = document.querySelector('.cursor-trail') as HTMLElement;

    if (!cursor || !trail) return;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
    }, 100);
  });


  // 🔊 Hover Sound (safe binding)
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'BUTTON' || target.tagName === 'A') {
      const audio = document.getElementById('hover-sound') as HTMLAudioElement;

      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {}); // avoid autoplay error
      }
    }
  });


  // 🔥 Global Scroll Animation
  gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });

}).catch(err => console.error(err));
