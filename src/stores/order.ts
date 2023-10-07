import { defineStore } from "pinia";
import { OrderState } from "../types/store";
import { Cart, Order } from "../types";
import type { IMethodAddOrder } from "../types/methods";
import orders from "../assets/order";

interface IMethodAddOrderWithDiscAndCost extends IMethodAddOrder {
    discount: number;
    shipcost: number;
  }

const useOrderStore = defineStore('order', {
    state: (): OrderState => ({
        orders: orders,
    }),
    getters: {
        getSubtotal() {
            return (payload: Cart[]) => {
                const subtotal = payload.map(payload => ({ quantity: payload.quantity, price: payload.price })).reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
                return subtotal;
            }
        }
    },
    actions: {
        add(payload: IMethodAddOrderWithDiscAndCost) {
            const newOrder = {...payload } as Order;
            newOrder.subtotal = this.getSubtotal(newOrder.products)
            newOrder.total = newOrder.subtotal -= newOrder.discount += newOrder.shipcost;
            this.orders?.push(newOrder);
        }
    },
});

export default useOrderStore;