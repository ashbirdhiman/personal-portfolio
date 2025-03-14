import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class EducationComponent {
  educationList: Education[] = [
    {
      degree: 'Ontario College Post-Graduate Certificate',
      institution: 'Loyalist College, Toronto, ON',
      duration: '2023 - 2025',
      description: 'Computer Software and Database Development',
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'Thapar Institute of Engineering and Technology, India',
      duration: '2017 - 2020',
      description: 'Computer Engineering',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Thapar Polytechnic College, India',
      duration: '2014 - 2017',
      description: 'Computer Science and Engineering',
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('active');
      }
    });
  }
}
