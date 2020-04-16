import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public filters: any,
  ) {
    this.formGroup = this.formBuilder.group({
      filters: this.formBuilder.array([]),
    })
  }

  onCancelClick() {
    this.dialogRef.close()
  }

  createFilterGroup(filterType, filterValue) {
    return this.formBuilder.group({
      filterType: filterType,
      filterValue: filterValue,
    })
  }

  get filtersFormArray() {
    return <FormArray>this.formGroup.get('filters')
  }

  onFilterChange($event, filterType, filterValue) {
    if ($event.source.checked) {
      this.filtersFormArray.push(
        this.createFilterGroup(filterType, filterValue),
      )
    } else {
      const index = this.formGroup.value.filters.findIndex(
        (filter) => filter.filterValue === filterValue,
      )
      this.filtersFormArray.removeAt(index)
    }
  }
}
