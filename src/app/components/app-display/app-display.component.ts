import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-display',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-display.component.html',
  styleUrl: './app-display.component.scss'
})
export class AppDisplayComponent {
  @Input() title: string = 'Download Our App';
  @Input() description: string = 'Sign up to earn points on every purchase, get exclusive deals, and stay updated with dispensary notifications.';
  @Input() subdescription: string = 'With our app, you can place orders on mobile, manage your rewards, and never miss out on special offers.';
  @Input() imageUrl: string = 'assets/fpd-app-display.png';
  @Input() buttonOneText: string = 'Shop Now';
  @Input() buttonTwoText: string = 'Learn More';
  @Input() buttonOneLink: string = '/shop';
  @Input() buttonTwoLink: string = '/about';
}
