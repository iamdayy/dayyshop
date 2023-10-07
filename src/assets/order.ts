import { Order } from "../types";
import carts from "./cart";

const orders: Order[] = [
    {
        id: 1000082,
        customer: {
            name: {
                first: "Dayyan",
                last: "Syauqi"
            },
            email: "iamdayy@mail.ex",
            courier: "JNE",
            address: {
                province: "Jawa Tengah",
                city: "Kota Pekalongan",
                district: "Pekalongan Selatan",
                village: "Jenggot",
                postal: 51133,
                street: "Jl. K.H. Syamsuri",
            },
        },
        subtotal: 80000,
        shipcost: 45000,
        discount: 50000,
        products: carts,
        total: 120000,
        status: false,
    }
];

export default orders;