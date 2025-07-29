import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { EducationItem } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationItems: EducationItem[] = [
    {
      degree:
        'Ontario College Post-Graduate Certificate in Computer Software and Database Development',
      institution: 'Loyalist College',
      location: 'Toronto, ON',
      date: 'SEPT 2023 - APR 2025',
      description:
        'Advanced studies in software development with a focus on database systems and modern development practices.',
      achievements: [
        'Led development team for the ATS Scan and Recommendation Tool capstone project',
        'Implemented CI/CD pipelines for multiple course projects',
        'Achieved excellence in Database Design and Administration coursework',
      ],
    },
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Thapar Institute of Engineering and Technology',
      location: 'India',
      date: 'JULY 2017 - JUNE 2020',
      description:
        'Comprehensive education in computer engineering covering both hardware and software aspects of computing systems.',
      achievements: [
        'Co-authored a research paper on "Comparison of AODV and DSR in MANETs" published in Elsevier Journal',
        'Developed Smart Waste Segregation System using ML & AWS',
        'Achieved distinction in Data Structures, Algorithms, and Operating Systems',
      ],
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Thapar Polytechnic College',
      location: 'India',
      date: 'JULY 2014 - MAY 2017',
      description:
        'Foundation in computer science and engineering principles with hands-on practical training.',
    },
  ];

  certifications = [
    'AWS Certified Solution Architect,2025',
    'AWS Certified Cloud Practitioner,2025',
    'Elsevier Journal Publication: "Comparison of AODV and DSR in MANETs", January 2020, co-authored with AK Verma, Arshdeep Kaur',
  ];
}
