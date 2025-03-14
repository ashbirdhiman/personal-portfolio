import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css'],
  imports: [NgForOf],
  standalone: true,
})
export class ProfessionalExperienceComponent implements OnInit {
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
      pos: 'AUG 2020 - JUNE 2023',
      duration: 'Amdocs (Brite-bill), India',
      title: [
        'Performance & Modernization: Upgraded workflows using Java/Spring.',
        'Security & Scalability: Secured apps via Spring Security.',
        'Cross-Functional Delivery: Built real-time bill share module.',
      ],
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log('Work Experiences:', this.workExperiences); // Debugging line

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'in-view');
          observer.unobserve(entry.target);
        }
      });
    });

    // Wait for the view to initialize before querying elements
    setTimeout(() => {
      const experienceItems =
        this.el.nativeElement.querySelectorAll('.experience-item');
      experienceItems.forEach((item: Element) => observer.observe(item));
    }, 0);
  }
}
