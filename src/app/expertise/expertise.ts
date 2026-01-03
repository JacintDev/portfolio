import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css',
})
export class Expertise implements AfterViewInit {
  private animationService = inject(AnimationService);

  @ViewChild('expertiseSection') expertiseSection!: ElementRef;

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    });
  }

  private initAnimations(): void {
    const section = this.expertiseSection.nativeElement;

    // Scroll-triggered animation for section header
    this.animationService.scrollTriggerFadeInUp(section.querySelector('.section-header'), section, {
      duration: 0.8,
    });

    // Scroll-triggered animation for skill cards (backend & frontend)
    this.animationService.scrollTriggerFadeInLeft(section.querySelector('.backend'), section, {
      duration: 0.8,
      delay: 0.2,
    });

    this.animationService.scrollTriggerFadeInRight(section.querySelector('.frontend'), section, {
      duration: 0.8,
      delay: 0.2,
    });

    // Scroll-triggered animation for tools section
    this.animationService.scrollTriggerFadeInUp(section.querySelector('.tools-section'), section, {
      duration: 0.8,
      delay: 0.3,
    });

    // Scroll-triggered stagger for tool items
    this.animationService.scrollTriggerStagger(section.querySelectorAll('.tool-item'), section, {
      duration: 0.5,
      delay: 0.5,
      stagger: 0.08,
    });
  }
}
