import { defineStore } from 'pinia'
import {getCookie} from "./authentication";
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: []
  }),
  actions: {
    async getProducts() {
      const response = await fetch("https://gr14.appdev.cloudns.ph/product/get-products");
      this.products = await response.json();
      console.log(this.products.toString());
    },
    async removeProduct() {
      let id = parseInt(document.getElementById("id-input").innerText);
      const response = await fetch("https://gr14.appdev.cloudns.ph/product/delete-product/" + id, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + getCookie('jwt')
        }
      });
    },
    async updateProduct() {
      let id = parseInt(document.getElementById("id-input").innerText);
      let name = document.getElementById("name-input").value;
      let price = document.getElementById("price-input").value;
      let description = document.getElementById("description-input").value;
      let image_path = document.getElementById("image-path-input").value;
      console.log(price);
      let data = {
        "id": id,
        "name": name,
        "price": price,
        "description": description,
        "image_path": image_path
      };
      const response = await fetch("https://gr14.appdev.cloudns.ph/product/update-product/" + id, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + getCookie('jwt'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
  }
})