import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AppDisplayComponent } from '../app-display/app-display.component';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { MarqueeComponent } from '../marquee/marquee.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, HeroComponent, AppDisplayComponent, BusinessDetailsComponent, MarqueeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
