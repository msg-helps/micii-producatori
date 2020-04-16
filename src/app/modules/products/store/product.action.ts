import { Action } from '@ngrx/store'
import { Product } from '../../../shared/models/product.model'

export enum ProductActionsTypes {
  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProductsError = '[Product] Get Products Error',
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
}

export class GetProducts implements Action {
  public readonly type = ProductActionsTypes.GetProducts
}

export class GetProductsSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductsSuccess
  constructor(public payload: Product[]) {}
}

export class GetProductsError implements Action {
  public readonly type = ProductActionsTypes.GetProductsError
}

export class GetProduct implements Action {
  public readonly type = ProductActionsTypes.GetProduct
  constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
  public readonly type = ProductActionsTypes.GetProductSuccess
  constructor(public payload: Product) {}
}

export type ProductActions =
  | GetProducts
  | GetProductsSuccess
  | GetProductsError
  | GetProduct
  | GetProductSuccess
