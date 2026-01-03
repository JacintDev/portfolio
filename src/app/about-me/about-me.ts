import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe implements AfterViewInit {
  private animationService = inject(AnimationService);

  @ViewChild('aboutSection') aboutSection!: ElementRef;

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    }, 200);
  }

  private initAnimations(): void {
    const section = this.aboutSection.nativeElement;
    const experienceCards = section.querySelectorAll('.experience');
    const aboutMeText = section.querySelector('.about-me');

    // Scroll-triggered animation for experience cards
    if (experienceCards.length > 0) {
      this.animationService.scrollTriggerStagger(experienceCards, section, {
        duration: 0.6,
        stagger: 0.15,
      });
    }

    // Scroll-triggered animation for about-me text
    if (aboutMeText) {
      this.animationService.scrollTriggerFadeInRight(aboutMeText, section, {
        duration: 0.8,
        delay: 0.2,
      });
    }
  }
}
