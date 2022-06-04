import { defineStore } from 'pinia'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: []
  }),
  actions: {
    async getProducts() {
      const response = await fetch("https://gr14.appdev.cloudns.ph/api/get-products");
      this.products = await response.json();
      console.log(this.products.toString())
    }
  }
})