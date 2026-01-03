import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { EmailRequest } from '../interfaces/email-request.interface';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  private animationService = inject(AnimationService);

  @ViewChild('contactSection') contactSection!: ElementRef;

  formData: EmailRequest = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

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
      { duration: 0.8, delay: 0.2 }
    );

    // Scroll-triggered stagger for contact items
    this.animationService.scrollTriggerStagger(section.querySelectorAll('.contact-item'), section, {
      duration: 0.5,
      delay: 0.3,
      stagger: 0.1,
    });
  }

  public async SendEmail() {
    emailjs.init('UXNv5Ku3Ltsnu1LtH');
    try {
      const response = await emailjs.send(
        'service_081v15b',
        'template_rqorwd9',
        this.formData as any,
        'UXNv5Ku3Ltsnu1LtH'
      );
      console.log('Email has been sent successfully:', response.status, response.text);
      alert('Email has been sent successfully!');
      this.formData = {
        name: '',
        subject: '',
        email: '',
        message: '',
      };
    } catch (error) {
      console.error('There was an error sending the email:', error);
      alert('There was an error sending the email. Please try again later.');
    }
  }
}
