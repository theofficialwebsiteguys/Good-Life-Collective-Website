import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannersService } from '../../banners.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true, // Assuming this is part of a standalone component setup
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    // Left-side text (slide from left)
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-60px)' }),
        animate(
          '900ms cubic-bezier(0.25, 1, 0.5, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),

    // Right-side logo (slide from right)
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(60px)' }),
        animate(
          '900ms 150ms cubic-bezier(0.25, 1, 0.5, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),

    // Text and buttons stagger
    trigger('staggerText', [
      transition(':enter', [
        query('h1, .subtitle, .buttons button', [
          style({ opacity: 0, transform: 'translateY(25px)' }),
          stagger(120, [
            animate(
              '700ms cubic-bezier(0.25, 1, 0.5, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() singleImage: string | null = null; 
  @Input() title: string = "Welcome To Good Life Collective";
  @Input() subtitle: string = "Premium Recreational Cannabis Dispensary. Order now for pickup or FREE delivery today.";
  @Input() buttons: { text: string; class: string; link?: string }[] = [
    { text: "Shop", class: "btn-primary", link: "/shop" },
    { text: "About Us", class: "btn-secondary", link: "/about" }
  ];
  @Input() heroHeight: string = '70vh'; 

  banners: { image: string; title: string; description: string }[] = [];
  currentIndex: number = 0;
  intervalId: any;

  animateHero = false;

  constructor(private bannersService: BannersService){}

  ngOnInit(): void {
    this.loadCarouselImages();
    this.startCarousel();

      setTimeout(() => {
        this.animateHero = true;
      }, 200);
  }

  loadCarouselImages() {
    // You can hardcode images here for testing or use a service
    this.banners = [
        { image: 'assets/hero1.jpg', title: 'Image 1', description: 'Good Life Collective Dispensary' },
        { image: 'assets/hero2.jpg', title: 'Image 2', description: 'Good Life Collective Dispensary' },
        { image: 'assets/hero3.jpg', title: 'Image 3', description: 'Good Life Collective Dispensary' },
        { image: 'assets/hero4.jpg', title: 'Image 4', description: 'Good Life Collective Dispensary' },
        { image: 'assets/hero5.jpg', title: 'Image 5', description: 'Good Life Collective Dispensary' },  
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