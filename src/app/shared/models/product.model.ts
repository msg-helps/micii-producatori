import { Producer } from './producer.model'

/**
 *
 * An interface representing Product model.
 */
export interface Product {
  /**
   * @member {string} [id]
   */
  id: string
  /**
   * @member {Producer} [producer]
   */
  producer?: Producer
  /**
   * @member {string} [name]
   */
  name?: string
  /**
   * @member {string} [description]
   */
  description?: string
  /**
   * @member {string} [pictureUrl]
   */
  pictureUrl?: string
  /**
   * @member {boolean} [available]
   */
  available?: boolean
  /**
   * @member {number} [price]
   */
  price?: number
  /**
   * @member {string} [unit]
   */
  unit?: string
  /**
   * @member {string} [category]
   */
  category?: string
}
