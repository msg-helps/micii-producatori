/**
 *
 * An interface representing Consumer model.
 */
export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
