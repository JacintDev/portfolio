import { Component } from '@angular/core';
import { EmailRequest } from '../interfaces/email-request.interface';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData: EmailRequest = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

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
