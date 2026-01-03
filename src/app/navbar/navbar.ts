import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  public isOpenMenu: boolean = false;
  public isScrolled: boolean = false;

  private animationService = inject(AnimationService);

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('sticky') navbarElement!: ElementRef;

  private menuTl: gsap.core.Timeline | null = null;

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initDesktopAnimation();
      this.initMenuAnimation();
    });
  }

  private initDesktopAnimation() {
    const el = this.navbarElement.nativeElement;

    // Navbar slide-in animation
    this.animationService.from(el, {
      yPercent: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      clearProps: 'none',
    });

    // Staggered animation for nav items
    this.animationService.staggerFadeInUp('.nav-item', {
      duration: 0.6,
      delay: 0.5,
    });
  }

  private initMenuAnimation() {
    const menuEl = this.mobileMenu.nativeElement;
    const items = menuEl.querySelectorAll('.mobile-nav-item');

    const line1 = this.navbarElement.nativeElement.querySelector('.line-1');
    const line2 = this.navbarElement.nativeElement.querySelector('.line-2');
    const line3 = this.navbarElement.nativeElement.querySelector('.line-3');

    this.menuTl = this.animationService.createTimeline({ paused: true, reversed: true });

    this.menuTl
      .to(line1, { top: '50%', rotate: 45, duration: 0.3, ease: 'power3.inOut' }, 0)
      .to(line2, { opacity: 0, duration: 0.1 }, 0)
      .to(line3, { top: '50%', rotate: -45, duration: 0.3, ease: 'power2.inOut' }, 0)
      .to(
        menuEl,
        {
          height: '300px',
          opacity: 1,
          duration: 0.3,
          ease: 'power3.inOut',
        },
        0
      )
      .to(
        items,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.3'
      );

    this.animationService.set(items, { y: -20, opacity: 0 });
  }

  public toggleMenu(): void {
    if (this.menuTl) {
      if (this.menuTl.reversed()) {
        this.menuTl.play();
      } else {
        this.menuTl.reverse();
      }
      this.isOpenMenu = !this.isOpenMenu;
    }
  }

  public scrollTo(sectionId: string): void {
    if (this.menuTl && !this.menuTl.reversed()) {
      this.toggleMenu();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
