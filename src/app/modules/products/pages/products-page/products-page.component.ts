import { Component, OnInit } from '@angular/core'
import {select, Store} from "@ngrx/store";
import {selectProductsState} from "../../store/product.reducers";
import {StateWithProducts} from "../../store/product.state";
import {GetProducts} from "../../store/product.action";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$ = this.store
    .select(selectProductsState)
    .pipe(select((state) => state.products))

  constructor(private store: Store<StateWithProducts>) {}

  ngOnInit() {
    this.store.dispatch(new GetProducts())
  }
}
