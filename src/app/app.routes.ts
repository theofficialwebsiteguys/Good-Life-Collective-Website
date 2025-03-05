import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { authGuard, CartComponent, CheckoutComponent, ConfirmationComponent, LoginComponent, RegisterComponent, SingleProductComponent } from 'shop-components'
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { BudtenderSalesComponent, DashboardComponent, OrdersComponent, UsersComponent } from 'admin-dashboard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'shop/:id', component: SingleProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'confirmation', component: ConfirmationComponent },
    { path: 'loyalty', component: LoyaltyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
          { path: 'orders', component: OrdersComponent },
          { path: 'users', component: UsersComponent },
          { path: 'budtender-sales', component: BudtenderSalesComponent },
          // add more child routes here as needed
          { path: '', redirectTo: 'orders', pathMatch: 'full' }
        ]
      },
];
