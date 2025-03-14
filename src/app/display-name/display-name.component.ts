import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-display-name',
  imports: [],
  templateUrl: './display-name.component.html',
  styleUrl: './display-name.component.css',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in', style({ opacity: 1 }))]),
    ]),
  ],
})
export class DisplayNameComponent {
  inView: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inView = true;
          this.renderer.addClass(entry.target, 'in-view');
          observer.unobserve(entry.target);
        }
      });
    });

    const textItems = this.el.nativeElement.querySelectorAll('.text-item');
    textItems.forEach((item: Element) => observer.observe(item));
  }
}
