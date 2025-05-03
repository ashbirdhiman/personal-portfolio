import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

declare global {
  interface Window {
    analytics?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (window.analytics) {
          window.analytics.track('Page View', {
            path: event.urlAfterRedirects,
          });
        } else {
          console.warn('Vercel Analytics is not available');
        }
      }
    });
  }
}
