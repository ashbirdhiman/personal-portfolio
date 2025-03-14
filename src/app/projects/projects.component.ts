import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Project {
  image: string;
  title: string;
  duration: string;
  details: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgForOf],
  standalone: true,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: 'assets/logo.png',
      title: 'ATS Scan and Recommendation Tool',
      duration: 'JAN 2025 – APR 2025',
      details: [
        'Continuous Integration & Deployment: Automated builds using Jenkins Webhooks, improved CI/CD efficiency, and developed pipelines with SonarQube for code quality analysis and automated testing.',
        'API Management: Implemented API versioning to ensure backward compatibility during feature updates, maintaining seamless user experience.',
        'Containerized Deployment: Deployed applications on Linux servers using scripting with Docker, creating optimized DockerFiles for efficient containerization.',
        'Database Integration: Installed and configured MongoDB on Loyalist College servers, integrating it with backend systems to enhance data processing and storage capabilities.',
      ],
    },
    {
      image: 'assets/cafe-management.jpg',
      title: 'Cafe Management Using MVC Architecture',
      duration: 'JULY 2024 - OCT 2024',
      details: [
        'Architectural Design: Designed and developed the application using object-oriented principles and MVC architecture with Java, Spring Boot, and Angular, ensuring seamless data flow and effective integration.',
        'REST API Development: Designed APIs to manage orders, menus, and inventory efficiently, ensuring smooth HTTP request handling.',
        'Database Management: Leveraged JPA for seamless database operations and integrated MySQL for reliable data storage and retrieval.',
      ],
    },
    {
      image: 'assets/hi-techsteel.jpg',
      title: 'HitechSteels, Ontario, Canada',
      duration: 'NOV 2023 – MAR 2024',
      details: [
        'UI/UX Design: Designed a visually appealing, user-friendly interface using Angular at HitechSteels, ensuring responsiveness across devices and consistent layout, color scheme, and typography.',
        'Testing & Deployment: Thoroughly tested the website on x10hosting before presenting it to the customer, and later hosted it on Namecheap with added SSL security.',
        'Client Interaction: Integrated a web form for client data submission, enabling the owner to access form details directly via email.',
      ],
    },
    {
      image: 'assets/smart-waste.JPG',
      title: 'Smart Waste Segregation Dustbin System using ML and AWS',
      duration: 'JAN 2019 - DEC 2019',
      details: [
        'Smart Waste Management: Deployed ultrasonic sensors to monitor bin waste levels and used AWS cloud services to upload waste images for analysis, automating status updates to authorities.',
        'Waste Classification: Leveraged Convolutional Neural Networks to segregate waste into biodegradable and non-biodegradable categories, enhancing efficiency and sustainability.',
        'Cross-Technology Adaptability: Worked with AWS, MySQL, and REST APIs to manage and process large datasets, showcasing skills that can be transferred to Spark or Scala environments.',
      ],
    },
  ];
}
