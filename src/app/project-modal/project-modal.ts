import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  openLink(url: string) {
    window.open(url, '_blank');
  }

  closeModal() {
    this.close.emit();
  }
}
