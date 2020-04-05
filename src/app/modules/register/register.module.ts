import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterPageComponent } from './pages/register-page/register-page.component'
import { RegisterService } from './register.service'
import { MatToolbarModule } from '@angular/material'
import { MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatInputModule,MatListModule,MatRadioModule
  ],
  exports: [RegisterPageComponent,
            MatNativeDateModule,FormsModule,
            MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],
  providers: [RegisterService],
})
export class RegisterModule {

}
