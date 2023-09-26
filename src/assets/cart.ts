import { Cart } from "../types";

const carts: Cart[] = [
  {
    id: 1,
    name: "Basic Tee",
    category: {
      title: "Shirt",
      href: "#",
    },
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35000,
    color: "Black",
    quantity: 3
  },
  {
    id: 2,
    name: "Basic Tee",
    category: {
      title: "Shirt",
      href: "#",
    },
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35000,
    color: "Black",
    quantity: 1
  },
];

export default carts;
