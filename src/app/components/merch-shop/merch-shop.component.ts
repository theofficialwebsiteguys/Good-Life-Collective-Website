import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchShopComponent as MerchShopComponentLib, CategoriesComponent, AdBannerComponent} from 'shop-components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-merch-shop',
  imports: [CommonModule, MerchShopComponentLib, CategoriesComponent, AdBannerComponent, MatProgressSpinnerModule],
  templateUrl: './merch-shop.component.html',
  styleUrl: './merch-shop.component.scss'
})
export class MerchShopComponent {
  isLoading = true; // Initially true to show spinner

  ngOnInit() {
          this.loadCarouselImages();
      this.startCarousel();
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

   banners: { image: string; title: string; description: string }[] = [];
    currentIndex: number = 0;
    intervalId: any;
  
    loadCarouselImages() {
      // You can hardcode images here for testing or use a service
      this.banners = [
          { image: 'assets/feature1.jpg', title: 'Image 1', description: 'Good Life Collective Dispensary' },
          { image: 'assets/feature2.jpg', title: 'Image 2', description: 'Good Life Collective Dispensary' },
          { image: 'assets/hero5.jpg', title: 'Image 4', description: 'Good Life Collective Dispensary' },
        ];
      
      // Uncomment the below code if you want to fetch images from a service
      // this.bannersService.getCarouselImages().subscribe(
      //   response => {
      //     this.banners = response.images.map((imgUrl, index) => ({
      //       image: `${imgUrl}?v=${new Date().getTime()}`,
      //       title: `Carousel Image ${index + 1}`,
      //       description: 'Good Life Collective Dispensary',
      //     }));
      //   },
      //   error => {
      //     console.error('Error fetching carousel images:', error);
      //   }
      // );
    }
  
    startCarousel(): void {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change image every 5 seconds
    }
  
    nextSlide(): void {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    }
  
    prevSlide(): void {
      this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
    }
  
    ngOnDestroy(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
}
