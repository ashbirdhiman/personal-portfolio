import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [animate('600ms ease-out')]),
    ]),
  ],
  standalone: true,
})
export class ProfessionalExperienceComponent {
  workExperiences = [
    {
      id: 1,
      icon: 'assets/rakhra-ITI.png',
      name: 'Computer Application Programmer',
      pos: 'APR 2024 - JULY 2024',
      duration: 'Rakhra Global Private I.T.I, India',
      title: [
        'Software Development: Built and maintained academic/administrative software in HTML/CSS.',
        'Data Optimization: Managed secure databases and testing processes.',
        'Documentation & Usability: Authored user guides and maintained documentation.',
      ],
    },
    {
      id: 2,
      icon: 'assets/amdocs-logo.jpg',
      name: 'Software Developer',
      pos: 'JAN 2022 - JUNE 2023',
      duration: 'Amdocs (Brite-bill), India',
      title: [
        'Performance & Modernization: Upgraded workflows using Java/Spring.',
        'Security & Scalability: Secured apps via Spring Security.',
        'Cross-Functional Delivery: Built real-time bill share module.',
      ],
    },
    {
      id: 3,
      icon: 'assets/amdocs-logo.jpg',
      name: 'Associate Software Engineer',
      pos: 'AUG 2020 - JAN 2022',
      duration: 'Amdocs (Brite-bill), India',
      title: [
        'Investigated Java code, configuration files and logs to identify root causes of issues.',
        'Reduced troubleshooting time by 15% and customized Britebill tools in Java to meet customer requirements, improving team efficiency in Test-Driven Development (TDD) and tested using JUnit.',
        'Collaborated effectively with the team to deliver high-availability solutions for critical applications.',
        'Engaged with global customers to troubleshoot and resolve software issues effectively.',
      ],
    },
  ];
}
