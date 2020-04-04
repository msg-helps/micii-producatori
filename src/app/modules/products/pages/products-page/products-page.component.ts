import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../shared/models/product.model';
import { MatDialog } from '@angular/material';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    protected productsService: ProductsService,
    protected dialog: MatDialog
  ) {}

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

  onFilterClick() {
    const dialogRef = this.dialog.open(FilterComponent, {
      data: { aa: 'aa' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.products$ = this.productsService.getAllProducts({ category: 'legume' });
    });
  }
}
