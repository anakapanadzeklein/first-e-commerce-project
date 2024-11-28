import { CartItem } from '../types/cartitemtypes';

export type OrderSummaryTypes = {
    cart: CartItem[],
    totalPrice: number,
    finalPrice: number,
  };