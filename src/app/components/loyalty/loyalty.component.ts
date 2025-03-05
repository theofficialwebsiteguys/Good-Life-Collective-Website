import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AppDisplayComponent } from '../app-display/app-display.component';

@Component({
  selector: 'app-loyalty',
  imports: [CommonModule, HeroComponent, AppDisplayComponent],
  templateUrl: './loyalty.component.html',
  styleUrl: './loyalty.component.scss'
})
export class LoyaltyComponent {

}
