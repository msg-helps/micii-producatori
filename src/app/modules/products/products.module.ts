import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsRoutingModule } from './products-routing.module'
import { ProductsPageComponent } from './pages/products-page/products-page.component'
import { ProductsService } from './products.service'
import { ProductTileComponent } from './components/product-tile/product-tile.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import {ProductsEffects} from "./store/products.effects";
import {productReducers} from "./store/product.reducers";
import {MatSelectModule} from "@angular/material/select";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FilterComponent} from "./components/filter/filter.component";

@NgModule({
  declarations: [ProductsPageComponent, ProductTileComponent, FilterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    StoreModule.forFeature('products', productReducers),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [ProductsPageComponent],
  providers: [ProductsService],
})
export class ProductsModule {}
