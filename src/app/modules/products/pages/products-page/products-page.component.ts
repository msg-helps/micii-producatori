import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../products.service'
import { Observable } from 'rxjs'
import { Product } from '../../../../shared/models/product.model'

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(protected productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts()
  }
}
