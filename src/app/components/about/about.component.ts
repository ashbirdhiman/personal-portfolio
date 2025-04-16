import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills = [
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'TypeScript'],
    },
    {
      category: 'Frontend',
      items: ['Angular', 'HTML/CSS', 'JavaScript'],
    },
    {
      category: 'Database',
      items: ['Oracle', 'MySQL', 'SQL Server', 'MongoDB'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Jenkins', 'SonarQube', 'CI/CD'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Jira', 'Confluence', 'Maven', 'Postman'],
    },
    {
      category: 'Web Servers',
      items: ['Apache HTTP Server', 'NGINX'],
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Cloud-native Development'],
    },
  ];
}
