import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ProductsService } from '../products.service'
import {
  GetProduct,
  GetProducts,
  GetProductsError,
  GetProductsSuccess,
  ProductActionsTypes,
} from './product.action'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class ProductsEffects {
  constructor(
    private productsService: ProductsService,
    private actions$: Actions,
  ) {}

  @Effect()
  public getProduct$ = this.actions$.pipe(
    ofType<GetProduct>(ProductActionsTypes.GetProduct),
    map((action) => action.payload),
  )

  @Effect()
  public getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(ProductActionsTypes.GetProducts),
    switchMap(() => {
      return this.productsService.getAllProducts().pipe(
        map((data) => new GetProductsSuccess(data)),
        catchError((err) => of(new GetProductsError())),
      )
    }),
  )
}
