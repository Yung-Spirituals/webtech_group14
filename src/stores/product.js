import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: "1",
        name: "Hiking boots",
        price: 2400,
        image: "https://source.unsplash.com/nj0a29qb_jo/300x300",
        description: "Sturdy hiking boots for every use"
      },
      {
        id: "2",
        name: "Winter sweater",
        price: 800,
        image: "https://source.unsplash.com/mU88MlEFcoU/300x300",
        description: "Too hot 4 U"
      },
      {
        id: "3",
        name: "Winter hat",
        price: 200,
        image: "https://source.unsplash.com/amTyFteGaRg/300x300",
        description: "Swagalicious"
      },
      {
        id: "4",
        name: "Water bottle",
        price: 120,
        image: "https://source.unsplash.com/reEySFadyJQ/300x300",
        description: "Holds every liquid, hot and cold"
      },
      {
        id: "5",
        name: "Clothes set for dogs ",
        price: 6670,
        image: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot dogs only"
      },
      {
        id: "6",
        name: "Clothes set for hogs ",
        price: 500,
        image: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot hogs only"
      },
    ]
  }),
  getters: {

  },

  actions: {

    async getProducts() {
      const response = await axios.get('https://fakestoreapi.com/products')
      this.products = response.data
    }
  }

})
