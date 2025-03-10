import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { HeroComponent } from '../hero/hero.component';
import { MarqueeComponent } from '../marquee/marquee.component';
import { ContactComponent as ContactComponentShop} from 'shop-components';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BusinessDetailsComponent, HeroComponent, MarqueeComponent, ContactComponentShop],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // Handle form submission (send data to backend, email, etc.)
      alert('Thank you for reaching out! We will get back to you soon.');
      this.contactForm.reset();
      this.isSubmitted = false;
    }
  }

  get formControls() {
    return this.contactForm.controls;
  }
}
