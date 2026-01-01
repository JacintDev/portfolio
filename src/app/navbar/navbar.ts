import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  public isOpenMenu: boolean = false;
  public isScrolled: boolean = false;

  public toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.toggleMenu();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
