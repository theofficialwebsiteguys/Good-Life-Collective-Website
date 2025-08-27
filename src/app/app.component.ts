import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

import { ConfigService } from 'shop-components'
import { environment } from '../environments/environment.prod';
import { VerificationComponent } from './components/verification/verification.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, TopBarComponent, NavbarComponent, VerificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('routerOutletContainer') routerOutletContainer: any;
  isDashboardRoute = false;

  constructor(private router: Router, private configService: ConfigService) {
    this.configService.setApiKey(environment.db_api_key);
  }

  onAgeVerified() {
    console.log('Age verified. Allowing access.');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isDashboardRoute = event.url.startsWith('/dashboard');
  
      // 🔥 Push a GTM page_view event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_path: event.urlAfterRedirects
      });
  
      // 🔄 Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
}
