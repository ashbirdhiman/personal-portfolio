// slider.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SliderComponent implements OnInit {
  @Input() scrollDuration: number = 20; // Scroll speed in seconds
  @Input() skillRepetitions: number = 10; // Number of skill repetitions


  skills: SkillItem[] = [
    { name: 'Java', image: 'assets/java-logo.png' },
    { name: 'Spring Boot', image: 'assets/spring-boot-logo.png' },
    { name: 'AWS', image: 'assets/AWS-logo.png' },
    { name: 'MySQL', image: 'assets/mysql-logo.png' },
    { name: 'Angular', image: 'assets/angular-logo.jpg' },
  ];

  // Create an infinite loop by repeating skills multiple times
  duplicatedSkills: SkillItem[] = [];

  ngOnInit() {
    // Repeat skills multiple times to create a seamless infinite loop
    this.duplicatedSkills = Array(10).fill(this.skills).flat();
  }
}
