import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FilterModalComponent } from './components/filter-modal/filter-modal.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  entryComponents: [FilterModalComponent],
  declarations: [FilterModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
