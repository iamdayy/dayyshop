import { defineStore } from "pinia";
import { CartState } from "../types/store";
import { Product } from "../types";
import carts from "../assets/cart";


const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        carts: carts
    }),
    getters: {
        getSubTotal(state) {
            return state.carts.map(cart => ({ quantity: cart.quantity, price: cart.price })).reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
        }
    },
    actions: {
        addToCart(product: Product) {
            const indexCart = this.carts?.findIndex(val => val.name == product.name);
            
            if (indexCart! < 0) {
                this.carts?.push({...product, quantity: 1});
            } else {
                this.carts[indexCart].quantity++
            }
        },
        decrementFromCart(id: number) {
            const indexCart = this.carts.findIndex(val => val.id == id)
            if (this.carts[indexCart].quantity > 1) {
                this.carts[indexCart].quantity--
            } else {
                this.carts.splice(indexCart, 1);
            }
        },
        incrementToCart(id: number) {
            const indexCart = this.carts.findIndex(val => val.id == id);
            this.carts[indexCart].quantity++
        },
        deleteFromCart(id: number) {
            const indexCart = this.carts.findIndex(val => val.id == id);
            this.carts.splice(indexCart, 1)
        }
    }
});

export default useCartStore;