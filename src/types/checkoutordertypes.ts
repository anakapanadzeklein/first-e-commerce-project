import { CartItem } from '../types/cartitemtypes';

export type CheckoutOrderTypes = {
    cart: CartItem[];
    totalPrice: number;
    finalPrice: number;
  }