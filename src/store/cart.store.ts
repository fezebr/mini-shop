import { cartItemsType } from "@/types/Cart";
// import { productsListType } from "@/types/Products"
import { defineStore } from "pinia";


export const useCartStore = defineStore("CartStore", {
     state: () => {
          return {
               cartItems: [] as cartItemsType[],
          };
     },
     getters: {
          totalNumber(state): number {
               return state.cartItems.reduce((accumulator: number, currentValue) => {
                    return accumulator + currentValue.quantity
               }, 0);
          },
          getProductQuantityById: (state) => {
               return (id: number) => {
                    const product = state.cartItems.find((item) => item.id === id)
                    return product ? product.quantity : 0
               }
          }
     },
     actions: {
          increaseCartQuantity(productId: number) {
               if (this.isExist(productId)) {
                    const indexOfselectedItem = this.cartItems.findIndex(cartItem => cartItem.id === productId)
                    this.cartItems[indexOfselectedItem].quantity = this.getProductQuantityById(productId) + 1
               } else {
                    this.cartItems.push({
                         id: productId,
                         quantity: 1
                    })
               }
          },
          descreaseCartQuantity(productId: number) {
               const indexOfselectedItem = this.cartItems.findIndex(cartItem => cartItem.id === productId)
               this.cartItems[indexOfselectedItem].quantity = this.getProductQuantityById(productId) - 1
          },
          isExist(productId: number) {
               return this.cartItems.some(cartItem => cartItem.id === productId)
          },
     },
});