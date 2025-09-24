import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-business-details',
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.scss'
})
export class BusinessDetailsComponent {
  /** Map center (defaults to Rochester, NY) */
  @Input() lat = 43.1566;
  @Input() lng = -77.6088;
  @Input() zoom = 13;

  /** Optional contact block */
  @Input() address?: string;   // e.g., "123 Example St, Rochester, NY 14604"
  @Input() phone?: string;     // e.g., "585-555-1234"
  @Input() hours?: string[];   // e.g., ["Mon–Thu: 10a–9p", "Fri–Sat: 10a–10p", "Sun: 11a–7p"]

  get mapLink(): string {
    const q = this.address ? encodeURIComponent(this.address) : `${this.lat},${this.lng}`;
    return `https://www.google.com/maps/search/?q=${q}`;
  }

}
