import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

export const productsRoutes = [
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
