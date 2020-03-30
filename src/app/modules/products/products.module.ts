import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductsService} from "./products.service";
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ProductsPageComponent, ProductTileComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [ProductsPageComponent],
  providers: [ProductsService]
})
export class ProductsModule {}
