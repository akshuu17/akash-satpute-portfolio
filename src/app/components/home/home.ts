import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { ProjectsComponent } from '../projects/projects';
import { SkillsComponent } from '../skills/skills';
import { ExperienceComponent } from '../experience/experience';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>

    <main class="main-container">

      <section id="hero">
        <app-hero></app-hero>
      </section>

      <section id="about">
        <app-about></app-about>
      </section>

      <section id="skills">
        <app-skills></app-skills>
      </section>

      <section id="projects">
        <app-projects></app-projects>
      </section>

      <section id="experience">
        <app-experience></app-experience>
      </section>

      <section id="contact">
        <app-contact></app-contact>
      </section>

    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
