import { Customer, Product } from ".";

export interface IMethodAddOrder {
    customer: Customer;
    products: Product[];
}