import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { MarqueeComponent } from '../components/marquee/marquee.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { CategorySectionComponent } from '../components/category-section/category-section.component';
import { BusinessDetailsComponent } from '../components/business-details/business-details.component';
import { GoogleReviewComponent } from '../components/google-review/google-review.component';
import { BannerComponent } from '../components/banner/banner.component';
import { FaqComponent } from '../components/faq/faq.component';
import {
  LocationSelectionComponent,
  ProductsCarouselComponent,
} from 'shop-components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeroComponent,
    MarqueeComponent,
    CategorySectionComponent,
    BusinessDetailsComponent,
    GoogleReviewComponent,
    BannerComponent,
    FaqComponent,
    LocationSelectionComponent,
    ProductsCarouselComponent,
    MatProgressSpinnerModule,
    FaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
