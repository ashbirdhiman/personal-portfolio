import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationName: string = 'fade-in';
  @Input() delay: number = 0;
  @Input() threshold: number = 0.1; // How much of the element should be visible before triggering

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Hide the element initially
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');

    // Setup the intersection observer
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class after the specified delay
          setTimeout(() => {
            this.renderer.addClass(
              this.element.nativeElement,
              this.animationName
            );
            this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
          }, this.delay);

          // Unobserve after triggering animation
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the element
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
