import { Injectable } from '@angular/core'
import { RestService } from '../../core/services/rest.service'
import { Observable } from 'rxjs'
import { Product } from '../../shared/models/product.model'

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends RestService {
  private relativeUrl = '/products/'

  public getAllProducts(): Observable<Product[]> {
    return this.get(this.relativeUrl)
  }

  public getProductById(id: string): Observable<Product> {
    return this.get(this.relativeUrl + id)
  }
}
