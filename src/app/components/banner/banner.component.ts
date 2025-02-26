import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @ViewChild('videoBackground') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.video.nativeElement.play().catch(() => {
      console.warn("Autoplay failed, attempting to play again.");
      this.video.nativeElement.muted = true;
      this.video.nativeElement.play();
    });
  }
}
