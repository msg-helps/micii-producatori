import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../../../../shared/components/filter-modal/filter-modal.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filters = [
    {
      filterType: 'price',
      viewType: 'Pret',
      filterValues: [
        '1 leu - 5 lei',
        '5 lei - 10 lei',
        '10 lei - 20 lei',
        'Peste 20 lei',
      ],
    },
    {
      filterType: 'category',
      viewType: 'Cafegorie',
      filterValues: ['Fructe', 'Legume', 'Preparate Carne', 'Patiserie'],
    },
  ]

  orders = [
    { value: 'latest', viewValue: 'Ultimele Produse' },
    { value: 'priceUp', viewValue: 'Pret Crescator' },
    { value: 'priceDown', viewValue: 'Pret Descrescator' },
  ]

  constructor(protected dialog: MatDialog, protected router: Router) {}

  onFilterClick() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: this.filters,
    })

    dialogRef.afterClosed().subscribe((result) => {
      // TODO - after a "final" table structure is done (maybe some changes will be required)
      // this.products$ = this.productsService.getAllProducts({ result });
    })
  }
}
