import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManagementRoutingModule } from './management-routing.module'
import { ManagementComponent } from './pages/management-page/management.component'
import { ManagementProductsComponent } from './components/products/products.component'
import { OrdersComponent } from './components/orders/orders.component'
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
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
