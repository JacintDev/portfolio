import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Welcome } from './welcome/welcome';
import { AboutMe } from './about-me/about-me';
import { Expertise } from './expertise/expertise';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Portfolio } from './portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Navbar, Welcome, AboutMe, Expertise, Contact, Footer, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
