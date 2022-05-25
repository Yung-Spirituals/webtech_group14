import { defineStore } from 'pinia'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: []
  }),
  getters: {

  },
  actions: {
    async getProducts() {
      const response = await fetch("http://localhost:8080/api/get-products");
      this.products = await response.json();
      console.log("1")
    }
  }
})
