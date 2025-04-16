import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ScrollAnimationDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]),
  });

  isSubmitting = false;

  constructor(private snackBar: MatSnackBar) {}

  get nameControl() {
    return this.contactForm.get('name')!;
  }
  get emailControl() {
    return this.contactForm.get('email')!;
  }
  get subjectControl() {
    return this.contactForm.get('subject')!;
  }
  get messageControl() {
    return this.contactForm.get('message')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 3000,
          panelClass: 'success-snackbar',
        });

        this.contactForm.reset();
        this.isSubmitting = false;
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
