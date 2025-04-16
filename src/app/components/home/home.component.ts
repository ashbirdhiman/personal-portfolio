import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { BackgroundSceneComponent } from "../background-scene/background-scene.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, BackgroundSceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // TypeWriter effect text
  introText = "I'm a";
  roles = [
    'Software Developer',
    'Full Stack Engineer',
    'Java Specialist',
    'Cloud Enthusiast',
    'Problem Solver',
  ];
  currentRoleIndex = 0;
  currentRole = '';
  currentChar = 0;
  isDeleting = false;
  typingSpeed = 100;

  constructor() {}

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    const currentRole = this.roles[this.currentRoleIndex];
    const speed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (this.isDeleting) {
      this.currentRole = currentRole.substring(0, this.currentChar - 1);
      this.currentChar--;
    } else {
      this.currentRole = currentRole.substring(0, this.currentChar + 1);
      this.currentChar++;
    }

    if (!this.isDeleting && this.currentChar === currentRole.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeWriter(), 1500); // Pause at end of word
    } else if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      setTimeout(() => this.typeWriter(), 500); // Pause before next word
    } else {
      setTimeout(() => this.typeWriter(), speed);
    }
  }
}
