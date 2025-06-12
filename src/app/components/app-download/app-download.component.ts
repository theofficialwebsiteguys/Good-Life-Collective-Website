import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-download',
  imports: [CommonModule],
  templateUrl: './app-download.component.html',
  styleUrl: './app-download.component.scss'
})
export class AppDownloadComponent {
  showQR = false;
}
