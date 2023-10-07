import { Cart, Order, Product } from ".";

export interface ProductState {
  products: Product[] | null;
}

export interface CartState {
  carts: Cart[];
}

export interface OrderState {
  orders: Order[] | null;
}