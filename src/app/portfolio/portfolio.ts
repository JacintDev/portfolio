import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { ProjectModal } from '../project-modal/project-modal';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, ProjectModal],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements AfterViewInit {
  private animationService = inject(AnimationService);
  private animationsInitialized = false;

  @ViewChild('portfolioSection') portfolioSection!: ElementRef;

  selectedProject: Project | null = null;
  Projects: Project[] = [
    {
      id: 1,
      name: 'AI-Powered Workout Optimization',
      description:
        'Developed an ESP32-based fitness tracking system with real-time heart rate and motion data collection, WiFi data transmission, and backend integration using ASP.NET and Angular, incorporating LSTM-based models for exercise analysis.',
      url: 'https://github.com/JacintDev/workout-optimization',
      technologies: [
        'C#',
        'ASP.NET Core',
        'Angular',
        'MSSQL',
        'Angular Material',
        'Entity Framework Core',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Python',
        'LSTM',
        'ESP32',
        'C++',
      ],
      keyFeatures: [
        '<span class="text-neutral-700 font-semibold">ESP32-based</span> full-stack <span class="text-neutral-700 font-semibold">IoT system</span> with real-time sensor data processing using <span class="text-neutral-700 font-semibold">LSTM</span> neural networks',
        'Bi-directional communication via <span class="text-neutral-700 font-semibold">SignalR</span> between <span class="text-neutral-700 font-semibold">ASP.NET Core</span> and web clients',
        '<span class="text-neutral-700 font-semibold">ONNX</span> Runtime integration for high-performance execution of <span class="text-neutral-700 font-semibold">Python-trained LSTM models</span> in <span class="text-neutral-700 font-semibold">ASP.NET Core</span>',
        'Secure<span class="text-neutral-700 font-semibold"> REST API</span> built with <span class="text-neutral-700 font-semibold">ASP.NET Core</span> using <span class="text-neutral-700 font-semibold">JWT-based authentication</span>',
        '<span class="text-neutral-700 font-semibold">Real-time Angular dashboard</span> with live <span class="text-neutral-700 font-semibold">SignalR</span> updates and <span class="text-neutral-700 font-semibold">AI-driven visualizations</span>',
        'Efficient time-series data storage using <span class="text-neutral-700 font-semibold">Entity Framework Core</span> and <span class="text-neutral-700 font-semibold">relational databases</span>',
      ],
    },
    {
      id: 2,
      name: 'Personal Website',
      description:
        'Developed a responsive single-page application built with Angular and TypeScript. It features a modern UI styled with Tailwind CSS, advanced GSAP animations, and seamless contact functionality via EmailJS.',
      url: 'https://github.com/JacintDev/portfolio',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'GSAP', 'EmailJS'],
      keyFeatures: [
        'Fully Responsive & Mobile-First Layout',
        'High-Performance<span class="text-neutral-700 font-semibold">GSAP Animations</span>',
        'Serverless Contact Integration',
      ],
    },
    {
      id: 3,
      name: 'Automated E2E Testing Framework',
      description:
        'Designed a robust End-to-End (E2E) test automation framework using C# and Selenium WebDriver for the SauceDemo e-commerce platform. The solution implements the Page Object Model (POM) design pattern to ensure maintainability, featuring custom wait wrappers and efficient locator strategies.',
      url: 'https://github.com/JacintDev/selenium-pom-csharp',
      technologies: ['C#', '.NET', 'Selenium WebDriver', 'Page Object Model'],
      keyFeatures: [
        'Scalable <span class="text-neutral-700 font-semibold">Page Object Model (POM)</span>',
        'Advanced Wait & Locator Logic',
        'Full E2E Scenario Coverage',
      ],
    },
  ];

  ngAfterViewInit(): void {
    // Use setTimeout to ensure *ngFor has rendered the elements
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    }, 200);
  }

  private initAnimations(): void {
    const section = this.portfolioSection.nativeElement;
    const header = section.querySelector('.section-header');
    const projectCards = section.querySelectorAll('.project-card');

    // Scroll-triggered animation for section header
    if (header) {
      this.animationService.scrollTriggerFadeInUp(header, section, {
        duration: 0.8,
      });
    }

    // Scroll-triggered stagger for project cards
    if (projectCards.length > 0) {
      this.animationService.scrollTriggerStagger(projectCards, section, {
        duration: 0.6,
        delay: 0.2,
        stagger: 0.15,
      });
    }
  }

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
    console.log(project.name);
  }

  closeProjectModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
