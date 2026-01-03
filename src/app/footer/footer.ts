import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit {
  private animationService = inject(AnimationService);

  @ViewChild('footerSection') footerSection!: ElementRef;

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    });
  }

  private initAnimations(): void {
    const section = this.footerSection.nativeElement;

    // Scroll-triggered fade in for footer content
    this.animationService.scrollTriggerFadeInUp(section.querySelector('.footer-content'), section, {
      duration: 0.8,
    });
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
