import { Component, ElementRef, HostBinding } from '@angular/core';
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
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { fadeInUp } from '../animations';

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
    ScrollAnimationDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInUp],
})
export class HomeComponent {
  private observer: IntersectionObserver;

  // ✅ This binds to the animation trigger
  @HostBinding('@fadeInUp') get animate() {
    return this.hasIntersected ? 'visible' : 'hidden';
  }

  private hasIntersected = false;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.hasIntersected = true;
        this.observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
