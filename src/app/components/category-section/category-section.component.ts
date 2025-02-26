import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category-section',
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {
  @ViewChild('productCarousel', { static: false }) productCarousel!: ElementRef;
  @ViewChild('categoryCarousel', { static: false }) categoryCarousel!: ElementRef;
  @ViewChild('productLeftArrow', { static: false }) productLeftArrow!: ElementRef;
  @ViewChild('productRightArrow', { static: false }) productRightArrow!: ElementRef;
  @ViewChild('categoryLeftArrow', { static: false }) categoryLeftArrow!: ElementRef;
  @ViewChild('categoryRightArrow', { static: false }) categoryRightArrow!: ElementRef;

  ngAfterViewInit() {
    this.updateProductArrows();
    this.updateCategoryArrows();
  }

  /**
   * Scroll the product carousel left (-1) or right (1).
   */
  scrollProducts(direction: number) {
    const scrollAmount = 240 * 4; // Scroll by 4 product widths
    this.productCarousel.nativeElement.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    setTimeout(() => this.updateProductArrows(), 500);
  }

  /**
   * Scroll the category carousel left (-1) or right (1).
   */
  scrollCategories(direction: number) {
    const scrollAmount = 240 * 3; // Scroll by 3 category widths
    this.categoryCarousel.nativeElement.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    setTimeout(() => this.updateCategoryArrows(), 500);
  }

  /**
   * Updates visibility of navigation arrows on window resize.
   */
  @HostListener('window:resize')
  updateArrows() {
    this.updateProductArrows();
    this.updateCategoryArrows();
  }

  /**
   * Dynamically show/hide arrows for the product carousel.
   */
  updateProductArrows() {
    const carousel = this.productCarousel.nativeElement;
    const canScrollLeft = carousel.scrollLeft > 0;
    const canScrollRight = carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth;

    this.productLeftArrow.nativeElement.style.visibility = canScrollLeft ? 'visible' : 'hidden';
    this.productRightArrow.nativeElement.style.visibility = canScrollRight ? 'visible' : 'hidden';
  }

  updateCategoryArrows() {
    const carousel = this.categoryCarousel.nativeElement;
    const canScrollLeft = carousel.scrollLeft > 0;
    const canScrollRight = carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth;
    const isOverflowing = carousel.scrollWidth > carousel.clientWidth;

    this.categoryLeftArrow.nativeElement.style.visibility = isOverflowing && canScrollLeft ? 'visible' : 'hidden';
    this.categoryRightArrow.nativeElement.style.visibility = isOverflowing && canScrollRight ? 'visible' : 'hidden';

    // Ensures the category carousel starts from the left when it overflows
    if (isOverflowing && carousel.scrollLeft === 0) {
      carousel.scrollLeft = 1;
    }
  }

  products = [
    { name: 'Blue Dream Vape', image: '/assets/default.jpg', price: '$40.00' },
    { name: 'Strawberry Gummies', image: '/assets/default.jpg', price: '$25.00' },
    { name: 'OG Kush Pre-Roll', image: '/assets/default.jpg', price: '$12.00' },
    { name: 'Live Resin Wax', image: '/assets/default.jpg', price: '$50.00' },
    { name: 'More Product...', image: '/assets/default.jpg', price: '$XX.00' },
    { name: 'OG Kush Pre-Roll', image: '/assets/default.jpg', price: '$12.00' },
    { name: 'Live Resin Wax', image: '/assets/default.jpg', price: '$50.00' },
    { name: 'More Product...', image: '/assets/default.jpg', price: '$XX.00' }
  ];

  categories = [
    {
      name: 'Flower',
      image: '/assets/icons/flower.png'
    },
    {
      name: 'Pre-Rolls',
      image: '/assets/icons/prerolls.png'
    },
    {
      name: 'Edibles',
      image: '/assets/icons/edibles.png'
    },
    {
      name: 'Concentrates',
      image: '/assets/icons/concentrates.png'
    },
    {
      name: 'Beverages',
      image: '/assets/icons/beverages.png'
    },
    {
      name: 'Tinctures',
      image: '/assets/icons/tinctures.png'
    },
    {
      name: 'Accessories',
      image: '/assets/icons/accessories.png'
    }
  ];
}
