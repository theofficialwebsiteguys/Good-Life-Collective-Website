import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReviewsService } from '../../reviews.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface ReviewItem {
  id: string;                 // synthesized
  author_name: string;
  rating: number;             // 0..5
  text: string;
  time: number;               // seconds epoch
  profile_photo_url?: string; // from API
  profileResolvedUrl?: string | null; // after proxy/fallback
}

@Component({
  selector: 'app-google-review',
  imports: [CommonModule],
  templateUrl: './google-review.component.html',
  styleUrl: './google-review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleReviewComponent {
  reviews: any[] = [];
  placeId = 'ChIJ-6MjXjC11okRI3zurNT5EF8'; // Your Google Place ID

  constructor(private googleReviewsService: ReviewsService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.googleReviewsService.getReviews(this.placeId).subscribe({
      next: (response) => {
        this.reviews = response.map((review: any) => {
          const sanitizedUrl = review.profile_photo_url ? this.sanitizeUrl(review.profile_photo_url) : null;
  
          // Preload the image by creating a new Image() instance
          if (sanitizedUrl) {
            const img = new Image();
            img.src = review.profile_photo_url as string; // Force browser to fetch image
          }
  
          return {
            ...review,
            sanitizedProfileUrl: sanitizedUrl
          };
        });
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
      }
    });
  }
  
  usePlaceholder(event: any) {
    event.target.src = 'assets/default-avatar.png'; // Path to local placeholder image
  }
  
  

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getStarsArray(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  }

  getInitials(name: string): string {
    if (!name) return '';
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  truncateText(text: string, limit: number): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}
