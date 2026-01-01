import { Component } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, ProjectModal],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  selectedProject: Project | null = null;
  Projects: Project[] = [
    {
      id: 1,
      name: 'IoT-based Real-Time Web Application',
      description:
        'Developed an ESP32-based fitness tracking system with real-time heart rate and motion data collection, WiFi data transmission, and backend integration using ASP.NET and Angular, incorporating LSTM-based models for exercise analysis.',
      url: 'https://github.com/Jacint69/',
      technologies: [
        'C#',
        'ASP.NET Core',
        'Angular',
        'MSSQL',
        'Angular Material',
        'Entity Framework Core',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Python',
        'LSTM',
        'ESP32',
        'C++',
      ],
      keyFeatures: [
        '<span class="text-neutral-700 font-semibold">ESP32-based</span> full-stack <span class="text-neutral-700 font-semibold">IoT system</span> with real-time sensor data processing using <span class="text-neutral-700 font-semibold">LSTM</span> neural networks',
        'Bi-directional communication via <span class="text-neutral-700 font-semibold">SignalR</span> between <span class="text-neutral-700 font-semibold">ASP.NET Core</span> and web clients',
        '<span class="text-neutral-700 font-semibold">ONNX</span> Runtime integration for high-performance execution of <span class="text-neutral-700 font-semibold">Python-trained LSTM models</span> in <span class="text-neutral-700 font-semibold">ASP.NET Core</span>',
        'Secure<span class="text-neutral-700 font-semibold"> REST API</span> built with <span class="text-neutral-700 font-semibold">ASP.NET Core</span> using <span class="text-neutral-700 font-semibold">JWT-based authentication</span>',
        '<span class="text-neutral-700 font-semibold">Real-time Angular dashboard</span> with live <span class="text-neutral-700 font-semibold">SignalR</span> updates and <span class="text-neutral-700 font-semibold">AI-driven visualizations</span>',
        'Efficient time-series data storage using <span class="text-neutral-700 font-semibold">Entity Framework Core</span> and <span class="text-neutral-700 font-semibold">relational databases</span>',
      ],
    },
    {
      id: 2,
      name: 'Personal Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      url: 'https://myportfolio.com',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      keyFeatures: ['Responsive Design', 'Project Gallery', 'Contact Form'],
    },
  ];

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
    console.log(project.name);
  }

  closeProjectModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
