import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobile = false;   

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth < 1024;
  }

  ngOnInit() {
    this.onResize();
  }
}
