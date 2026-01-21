import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AnimationService } from '../services/animation.service';
import { ContactModal } from '../contact-modal/contact-modal';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ContactModal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  private animationService = inject(AnimationService);

  message: string | null = null;
  @ViewChild('contactSection') contactSection!: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  ngAfterViewInit(): void {
    this.animationService.runOutsideAngular(() => {
      this.initAnimations();
    });
  }

  private initAnimations(): void {
    const section = this.contactSection.nativeElement;

    // Scroll-triggered animation for contact info
    this.animationService.scrollTriggerFadeInLeft(section.querySelector('.contact-info'), section, {
      duration: 0.8,
    });

    // Scroll-triggered animation for contact form
    this.animationService.scrollTriggerFadeInRight(
      section.querySelector('.contact-form'),
      section,
      { duration: 0.8, delay: 0.2 },
    );

    // Scroll-triggered stagger for contact items
    this.animationService.scrollTriggerStagger(section.querySelectorAll('.contact-item'), section, {
      duration: 0.5,
      delay: 0.3,
      stagger: 0.1,
    });
  }

  public async SendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    emailjs.init('UXNv5Ku3Ltsnu1LtH');
    try {
      const response = await emailjs.send(
        'service_081v15b',
        'template_rqorwd9',
        this.contactForm.value as any,
        'UXNv5Ku3Ltsnu1LtH',
      );
      this.message = 'Your message has been sent successfully!';

      this.contactForm.reset();
    } catch (error) {
      this.message = 'An error occurred while sending your message. Please try again later.';
    }
  }
}
