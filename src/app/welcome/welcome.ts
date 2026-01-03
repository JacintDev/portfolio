import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements AfterViewInit {
  private animationService = inject(AnimationService);

  @ViewChild('welcomeSection') welcomeSection!: ElementRef;

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    }, 150);
  }

  private initAnimations(): void {
    const section = this.welcomeSection.nativeElement;

    // Animate introduce text
    const introduce = section.querySelector('.introduce');
    if (introduce) {
      this.animationService.fadeInUp(introduce, {
        duration: 0.8,
        delay: 0.3,
      });
    }

    // Animate badges with stagger
    const badges = section.querySelectorAll('.badge span');
    if (badges.length > 0) {
      this.animationService.staggerScaleIn(badges, {
        duration: 0.5,
        delay: 0.6,
        stagger: 0.1,
      });
    }

    // Animate buttons
    const buttons = section.querySelectorAll('.buttons button');
    if (buttons.length > 0) {
      this.animationService.staggerFadeInUp(buttons, {
        duration: 0.6,
        delay: 0.9,
        stagger: 0.15,
      });
    }

    // Animate social links
    const socialLinks = section.querySelectorAll('.find-me-on a');
    if (socialLinks.length > 0) {
      this.animationService.staggerFadeInUp(socialLinks, {
        duration: 0.4,
        delay: 1.1,
        stagger: 0.1,
      });
    }

    // Animate image/coding section
    const imageContainer = section.querySelector('.image-container');
    if (imageContainer) {
      this.animationService.fadeInRight(imageContainer, {
        duration: 1,
        delay: 0.5,
      });
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'Jacint_Kovacs_CV.pdf';
    link.download = 'Jacint_Kovacs_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
