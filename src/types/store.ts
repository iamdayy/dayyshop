import { Cart, Product } from ".";

export interface ProductState {
  products: Product[] | null;
}

export interface CartState {
  carts: Cart[];
}