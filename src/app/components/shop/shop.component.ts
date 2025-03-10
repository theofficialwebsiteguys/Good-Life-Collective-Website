import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShopComponent as ShopComponentLib, CategoriesComponent, AdBannerComponent} from 'shop-components';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ShopComponentLib, CategoriesComponent, AdBannerComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
