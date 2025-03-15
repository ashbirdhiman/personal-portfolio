import { Component, ElementRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SliderComponent } from '../slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-name',
  imports: [SliderComponent, CommonModule],
  templateUrl: './display-name.component.html',
  styleUrl: './display-name.component.css',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'out',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('out <=> in', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class DisplayNameComponent implements OnInit {
  inView: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    observer.observe(this.el.nativeElement);

    // Animate text items
    const textItems = this.el.nativeElement.querySelectorAll('.text-item');
    textItems.forEach((item: Element, index: number) => {
      item.classList.add('animate-item');
      item.setAttribute('style', `animation-delay: ${index * 0.3}s`);
    });
  }
}
