import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShopComponentsComponent, ShopComponent as ShopComponentLib, CategoriesComponent} from 'shop-components';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ShopComponentLib, CategoriesComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
