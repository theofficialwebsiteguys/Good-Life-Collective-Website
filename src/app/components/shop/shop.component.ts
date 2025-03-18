import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopComponent as ShopComponentLib, CategoriesComponent, AdBannerComponent} from 'shop-components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ShopComponentLib, CategoriesComponent, AdBannerComponent, MatProgressSpinnerModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  isLoading = true; // Initially true to show spinner

  ngOnInit() {
    // Simulating API/data load (Replace with actual API call)
    setTimeout(() => {
      this.isLoading = false; // Hide spinner when data is loaded
    }, 500); // Adjust time as needed
  }

  @ViewChild('shopSection', { static: false }) shopSection!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.scrollToShop();
      }
    });
  }

  scrollToShop() {
    if (this.shopSection) {
      setTimeout(() => {
        this.shopSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to ensure the view initializes
    }
  }
}
