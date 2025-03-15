import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon?.addEventListener('click', () => {
      navLinks?.classList.toggle('active');
    });

    // Ensure nav-links are visible for screens greater than 768px
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks?.classList.remove('active');
      }
    });
  }
}
