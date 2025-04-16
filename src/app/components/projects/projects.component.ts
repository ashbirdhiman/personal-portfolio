import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ProjectItem } from '../../models/project.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      title: 'ATS Scan and Recommendation Tool',
      date: 'JAN 2025 - APR 2025',
      description:
        'A tool that scans resumes against job descriptions to provide recommendations for improving match rates with Applicant Tracking Systems.',
      features: [
        'Implemented Jenkins Webhooks for automated builds, asynchronous workflows, optimizing CI/CD pipelines by 40% using SonarQube for code quality analysis and automated testing',
        'Implemented API versioning and routing using NGINX, ensuring backward compatibility and smooth user experience during feature rollouts',
        'Containerized applications using Docker and Bash scripting, optimizing Linux server deployments',
        'Installed and configured MongoDB on Loyalist College servers, integrating it with backend systems to enhance data processing and storage capabilities',
      ],
      technologies: [
        'Jenkins',
        'Docker',
        'NGINX',
        'MongoDB',
        'CI/CD',
        'SonarQube',
        'Bash',
        'Linux',
      ],
      featured: true,
      image: 'assets/images/projects/scansync.png',
      imageAlt: 'ATS Scan and Recommendation Tool',
    },
    {
      title: 'Appoint Well – MVC-based Appointment System',
      date: 'OCT 2024 - NOV 2024',
      description:
        'A comprehensive appointment management system built using MVC architecture, allowing users to schedule, manage, and track appointments.',
      features: [
        'Designed and developed the application using object-oriented principles and MVC architecture with Java, Spring Boot, and Angular, ensuring seamless data flow and effective integration',
        'Designed APIs to manage orders, menus, and inventory efficiently, ensuring smooth HTTP request handling',
        'Leveraged JPA for seamless database operations and integrated MySQL for reliable data storage and retrieval',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'REST API',
        'MySQL',
        'JPA',
        'MVC',
      ],
      github: 'https://github.com/ashbirdhiman/appointwell',
      demo: 'https://appointwell-demo.herokuapp.com',
      featured: true,
      image: 'assets/images/projects/appointwell.png',
      imageAlt: 'Appoint Well',
    },
    {
      title: 'HitechSteels, Ontario, Canada',
      date: 'NOV 2023 - MAR 2024',
      description:
        'A responsive website for a steel manufacturing company, showcasing their products, services, and company information.',
      features: [
        'Designed a visually appealing, user-friendly interface using Angular, ensuring responsiveness across devices and consistent layout, colour scheme, and typography',
        'Thoroughly tested the website on X10hosting before presenting it to the customer, and hosted on Namecheap with integrated SSL security',
        'Integrated a web form for client data submission, enabling the owner to access form details directly via email',
      ],
      technologies: [
        'Angular',
        'CSS',
        'Responsive Design',
        'SSL',
        'Web Hosting',
      ],
      demo: 'https://hitechsteels.ca',
      featured: false,
      image: 'assets/images/projects/hi-techsteel.jpg',
      imageAlt: 'HitechSteels Website',
    },
    {
      title: 'Smart Waste Segregation System (ML & AWS)',
      date: 'JAN 2019 - DEC 2019',
      description:
        'An intelligent waste management system that uses machine learning to automatically classify and segregate waste materials.',
      features: [
        'Deployed ultrasonic sensors to monitor bin waste levels and used AWS cloud services to upload waste images for analysis, automating status updates to authorities',
        'Leveraged Convolutional Neural Networks to segregate waste into biodegradable and non-biodegradable categories, Improving waste classification efficiency and promoting sustainability',
        'Worked with AWS, MySQL, and REST APIs to manage and process large datasets, showcasing skills that can be transferred to Spark or Scala environments',
      ],
      technologies: [
        'Machine Learning',
        'AWS',
        'IoT',
        'MySQL',
        'REST API',
        'CNN',
        'Sensors',
      ],
      github: 'https://github.com/ashbirdhiman/smart-waste',
      featured: true,
      image: 'assets/images/projects/smart-waste.JPG',
      imageAlt: 'Smart Waste Segregation System',
    },
  ];

  getFeaturedProjects(): ProjectItem[] {
    return this.projects.filter((project) => project.featured);
  }

  getOtherProjects(): ProjectItem[] {
    return this.projects.filter((project) => !project.featured);
  }
}
