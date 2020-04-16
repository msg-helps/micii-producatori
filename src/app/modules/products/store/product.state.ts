import { Product } from '../../../shared/models/product.model'
import { AppState } from '../../state/app.state'

export interface ProductState {
  products: Product[]
  selectedProduct: Product
  loading: boolean
  error: boolean
}

export interface StateWithProducts extends AppState {
  products: ProductState
}

export const initialProductState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: false,
}
