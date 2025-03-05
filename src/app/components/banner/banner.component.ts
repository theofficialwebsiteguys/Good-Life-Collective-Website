import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from 'admin-dashboard'
@Component({
  selector: 'app-banner',
  imports: [CommonModule, RouterModule],
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
