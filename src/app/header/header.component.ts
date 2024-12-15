import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobile = false;   
  isLoggedIn = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth < 1024;
  }

  ngOnInit() {
    this.onResize();
    this.isLoggedIn = !!localStorage.getItem('tokenHuntersLeage');
  }

  logout() {
    localStorage.removeItem('tokenHuntersLeage');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
