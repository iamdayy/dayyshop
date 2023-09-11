import { defineStore } from "pinia";
import { CartState } from "../types/store";
import { Product } from "../types";


const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        carts: []
    }),
    getters: {},
    actions: {
        addToCart(product: Product) {
            const indexCart = this.carts?.findIndex(val => val.name == product.name);
            console.log(indexCart);
            
            if (indexCart! < 0) {
                this.carts?.push({...product, quantity: 1});
            } else {
                this.carts[indexCart].quantity++
            }
        }
    }
});

export default useCartStore;