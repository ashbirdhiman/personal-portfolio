import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ExperienceItem } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      title: 'Computer Application Programmer',
      company: 'Rakhra Global Private I.T.I',
      location: 'India',
      date: 'APR 2024 - JULY 2024',
      description: [
        'Built and maintained academic/administrative software in HTML/CSS, ensuring compliance with standards, and integrated new systems to enhance performance.',
        'Managed secure databases and testing processes, resulting in a 35% improvement in data accuracy.',
        'Authored user guides and maintained documentation to streamline system maintenance and user adoption, reducing processing errors by 12%.',
      ],
      technologies: [
        'HTML/CSS',
        'Database Management',
        'Testing',
        'Documentation',
      ],
    },
    {
      title: 'Software Developer (Promoted from Associate Software Engineer)',
      company: 'Amdocs (Brite-bill)',
      location: 'India',
      date: 'AUG 2020 - JUNE 2023',
      description: [
        'Upgraded workflows using Java/Spring, ensuring data quality by implementing validation strategies and boosting efficiency by 30%; revamped legacy code, reducing costs by 12% and supporting over 10 million users.',
        'Secured applications using Spring Security and streamlined data processing through Oracle DB integration and OAuth/JSON.',
        'Developed a real-time bill-sharing module using Angular, REST APIs, and third-party API gateways, reducing troubleshooting time by 15%.',
        'Diagnosed and resolved billing system issues for global clients using Agile methodologies and root-cause analysis.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'Oracle DB',
        'REST APIs',
        'Spring Security',
        'OAuth',
        'JSON',
        'Agile',
      ],
    },
  ];

  selectedExperienceIndex = 0;

  isActiveTab(index: number): boolean {
    return this.selectedExperienceIndex === index;
  }

  setActiveTab(index: number): void {
    this.selectedExperienceIndex = index;
  }
}
