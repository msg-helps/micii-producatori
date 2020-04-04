import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {
  @Input()
  product: Product;

  constructor(protected router: Router) {}

  ngOnInit() {}

  onProductClick() {
    this.router.navigate([]);
  }

  styleProducerAvatar(): Object {
    return {
      'background-image': 'url(' + this.product.producer.pictureUrl + ')',
      'background-size': 'cover',
    };
  }
}
