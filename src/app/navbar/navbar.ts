import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  NgZone,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  public isOpenMenu: boolean = false;
  public isScrolled: boolean = false;

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('sticky') navbarElement!: ElementRef;

  private menuTl: gsap.core.Timeline | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Wait for view init
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.initMenuAnimation();
      }, 100);
    });
  }

  private initMenuAnimation() {
    const menuEl = this.mobileMenu.nativeElement;
    const items = menuEl.querySelectorAll('.mobile-nav-item');

    const line1 = this.navbarElement.nativeElement.querySelector('.line-1');
    const line2 = this.navbarElement.nativeElement.querySelector('.line-2');
    const line3 = this.navbarElement.nativeElement.querySelector('.line-3');

    this.menuTl = gsap.timeline({ paused: true, reversed: true });

    this.menuTl

      .to(line1, { top: '50%', rotate: 45, duration: 0.3, ease: 'power2.inOut' }, 0)

      .to(line2, { opacity: 0, duration: 0.1 }, 0)

      .to(line3, { top: '50%', rotate: -45, duration: 0.3, ease: 'power2.inOut' }, 0)

      .to(
        menuEl,
        {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power1.inOut',
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
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      );

    gsap.set(items, { y: -20, opacity: 0 });
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
