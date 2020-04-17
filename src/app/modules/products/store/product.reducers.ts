import {
  initialProductState,
  ProductState,
  StateWithProducts,
} from './product.state'
import { ProductActions, ProductActionsTypes } from './product.action'

export function productReducers(
  state = initialProductState,
  action: ProductActions,
): ProductState {
  switch (action.type) {
    case ProductActionsTypes.GetProducts: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ProductActionsTypes.GetProductsSuccess: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    }
    case ProductActionsTypes.GetProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload,
      }
    }
    case ProductActionsTypes.GetProductsError: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    default:
      return state
  }
}

export const selectProductsState = (state: StateWithProducts) => state.products
