import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  imports: [CommonModule],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.css',
})
export class ContactModal {
  @Input({ required: true }) message!: string;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
