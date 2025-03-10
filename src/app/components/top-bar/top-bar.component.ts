import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  isOpen: boolean = false;
  currentTime: Date = new Date();

  businessHours = [
    { day: 0, open: 11, close: 21 }, // Sunday: 11AM - 9PM
    { day: 1, open: 8, close: 22 },  // Monday: 8AM - 10PM
    { day: 2, open: 8, close: 22 },  // Tuesday: 8AM - 10PM
    { day: 3, open: 8, close: 22 },  // Wednesday: 8AM - 10PM
    { day: 4, open: 8, close: 22 },  // Thursday: 8AM - 10PM
    { day: 5, open: 10, close: 23 }, // Friday: 10AM - 11PM
    { day: 6, open: 10, close: 23 }  // Saturday: 10AM - 11PM
  ];

  ngOnInit() {
    this.checkBusinessStatus();
    setInterval(() => {
      this.checkBusinessStatus();
    }, 60000); // Check every minute
  }

  checkBusinessStatus() {
    const now = new Date();
    const today = now.getDay();
    const currentHour = now.getHours();

    const todayHours = this.businessHours.find(d => d.day === today);
    if (todayHours) {
      this.isOpen = currentHour >= todayHours.open && currentHour < todayHours.close;
    }
  }
}
