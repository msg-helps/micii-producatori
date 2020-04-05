import { Component, OnInit } from '@angular/core'
import { RegisterService } from '../../register.service'
import { Observable } from 'rxjs'
import { Consumer } from '../../../../shared/models/consumer.model'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})

export class RegisterPageComponent{

   register_consumer(){
      // register as consumer
   }

   register_producer(){
      // register as producer
   }

   processFile(imageInput: any) {
      // process the image
   }
}
