import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManagementRoutingModule } from './management-routing.module'
import { ManagementComponent } from './pages/management-page/management.component'
import { ManagementProductsComponent } from './components/products/products.component'
import { OrdersComponent } from './components/orders/orders.component'
import { MatDividerModule, MatTabsModule } from '@angular/material';
import { DetailsComponent } from './components/details/details.component'

@NgModule({
  declarations: [
    ManagementComponent,
    ManagementProductsComponent,
    OrdersComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatTabsModule,
    MatDividerModule,
  ],
})
export class ManagementModule {}
