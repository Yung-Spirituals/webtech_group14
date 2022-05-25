import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: "1",
        name: "Hiking boots",
        price: 2400,
        image_path: "https://source.unsplash.com/nj0a29qb_jo/300x300",
        description: "Sturdy hiking boots for every use",
        type: "boots"
      },
      {
        id: "2",
        name: "Winter sweater",
        price: 800,
        image_path: "https://source.unsplash.com/mU88MlEFcoU/300x300",
        description: "Too hot 4 U",
        type: "sweater"
      },
      {
        id: "3",
        name: "Winter hat",
        price: 200,
        image_path: "https://source.unsplash.com/amTyFteGaRg/300x300",
        description: "Swagalicious",
        type: "hat"
      },
      {
        id: "4",
        name: "Winter hat",
        price: 200,
        image_path: "https://source.unsplash.com/amTyFteGaRg/300x300",
        description: "Swagalicious",
        type: "hat"
      },
      {
        id: "5",
        name: "Winter hat",
        price: 200,
        image_path: "https://source.unsplash.com/amTyFteGaRg/300x300",
        description: "Swagalicious",
        type: "hat"
      },
      {
        id: "6",
        name: "Water bottle",
        price: 120,
        image_path: "https://source.unsplash.com/reEySFadyJQ/300x300",
        description: "Holds every liquid, hot and cold",
        type: "bottle"
      },
      {
        id: "7",
        name: "Clothes set for dogs ",
        price: 6670,
        image_path: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot dogs only",
        type: "dogs"
      },
      {
        id: "8",
        name: "Clothes set for hogs ",
        price: 500,
        image_path: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot hogs only",
        type: "dogs"
      },
      {
        id: "9",
        name: "Clothes set for hogs ",
        price: 500,
        image_path: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot hogs only",
        type: "dogs"
      },
      {
        id: "7",
        name: "Clothes set for hogsssszzz ",
        price: 500,
        image: "https://source.unsplash.com/qy0BHykaq0E/300x300",
        description: "For hot hogs only"
      }
    ]
  }),
  getters: {

  },
  actions: {
    async getProducts() {
      const response = await fetch("http://localhost:8080/api/get-products");
      this.products = await response.json();
    }
  }
})
