import { defineStore } from "pinia";
import { ProductState } from "../types/store";
import products from "../assets/products";

const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    products: products,
  }),
  getters: {
    getCategoryProduct(state) {
      const categories = state.products
        ?.map((product) => product.category);
        const names = categories?.map(category =>  category.title);
        const filtered = categories?.filter(({ title }, i) => names?.includes(title, i + 1));
        console.log(filtered);
        console.log(categories);
        console.log(names);
        
        return filtered;
    },
    getRandomCategoryImage(state) {
      return (category: string, num: number) => {
        const shuffled = state.products?.filter((product) => product.category.title == category).sort(() => 0.5 - Math.random());
        return shuffled?.slice(0, num).map((shuffle) => shuffle.imageSrc);
      }
    }
  },
  actions: {},
});

export default useProductStore;

