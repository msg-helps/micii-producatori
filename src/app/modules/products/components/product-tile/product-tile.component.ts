import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
