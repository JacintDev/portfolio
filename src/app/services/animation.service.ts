import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Run animation outside Angular zone for better performance
   */
  runOutsideAngular(callback: () => void, delay: number = 100): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(callback, delay);
    });
  }

  /**
   * Fade in from bottom animation
   */
  fadeInUp(target: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!target) return null;
    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(target, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration, delay, ease });
  }

  /**
   * Fade in from left animation
   */
  fadeInLeft(target: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!target) return null;
    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(target, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration, delay, ease });
  }

  /**
   * Fade in from right animation
   */
  fadeInRight(target: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!target) return null;
    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(target, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration, delay, ease });
  }

  /**
   * Fade in from top animation
   */
  fadeInDown(target: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!target) return null;
    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(target, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration, delay, ease });
  }

  /**
   * Scale in animation
   */
  scaleIn(target: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!target) return null;
    const { duration = 0.6, delay = 0, ease = 'back.out(1.7)' } = config;

    return gsap.fromTo(
      target,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration, delay, ease }
    );
  }

  /**
   * Staggered fade in animation for multiple elements
   */
  staggerFadeInUp(targets: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!targets || (targets instanceof NodeList && targets.length === 0)) return null;
    const { duration = 0.6, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;

    return gsap.fromTo(
      targets,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration, delay, ease, stagger }
    );
  }

  /**
   * Staggered scale in animation
   */
  staggerScaleIn(targets: gsap.TweenTarget, config: AnimationConfig = {}): gsap.core.Tween | null {
    if (!targets || (targets instanceof NodeList && targets.length === 0)) return null;
    const { duration = 0.5, delay = 0, ease = 'back.out(1.7)', stagger = 0.1 } = config;

    return gsap.fromTo(
      targets,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration, delay, ease, stagger }
    );
  }

  /**
   * Create scroll-triggered animation
   */
  scrollTriggerFadeInUp(
    target: gsap.TweenTarget,
    trigger: string | Element,
    config: AnimationConfig = {}
  ): gsap.core.Tween | null {
    if (!target || (target instanceof NodeList && target.length === 0)) return null;

    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(
      target,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  /**
   * Create scroll-triggered stagger animation
   */
  scrollTriggerStagger(
    targets: gsap.TweenTarget,
    trigger: string | Element,
    config: AnimationConfig = {}
  ): gsap.core.Tween | null {
    if (!targets || (targets instanceof NodeList && targets.length === 0)) return null;

    const { duration = 0.6, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;

    return gsap.fromTo(
      targets,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  /**
   * Create scroll-triggered fade in from left
   */
  scrollTriggerFadeInLeft(
    target: gsap.TweenTarget,
    trigger: string | Element,
    config: AnimationConfig = {}
  ): gsap.core.Tween | null {
    if (!target || (target instanceof NodeList && target.length === 0)) return null;

    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(
      target,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  /**
   * Create scroll-triggered fade in from right
   */
  scrollTriggerFadeInRight(
    target: gsap.TweenTarget,
    trigger: string | Element,
    config: AnimationConfig = {}
  ): gsap.core.Tween | null {
    if (!target || (target instanceof NodeList && target.length === 0)) return null;

    const { duration = 0.8, delay = 0, ease = 'power2.out' } = config;

    return gsap.fromTo(
      target,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  /**
   * Create a timeline
   */
  createTimeline(config?: gsap.TimelineVars): gsap.core.Timeline {
    return gsap.timeline(config);
  }

  /**
   * Set initial state
   */
  set(target: gsap.TweenTarget, vars: gsap.TweenVars): gsap.core.Tween {
    return gsap.set(target, vars);
  }

  /**
   * Basic tween to
   */
  to(target: gsap.TweenTarget, vars: gsap.TweenVars): gsap.core.Tween {
    return gsap.to(target, vars);
  }

  /**
   * Basic tween from
   */
  from(target: gsap.TweenTarget, vars: gsap.TweenVars): gsap.core.Tween {
    return gsap.from(target, vars);
  }

  /**
   * Refresh ScrollTrigger (useful after dynamic content changes)
   */
  refreshScrollTrigger(): void {
    if (this.isBrowser) {
      ScrollTrigger.refresh();
    }
  }

  /**
   * Kill all ScrollTriggers for cleanup
   */
  killScrollTriggers(): void {
    if (this.isBrowser) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }
}
