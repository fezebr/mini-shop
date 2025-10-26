<template>
  <div class="bg-white shadow-2xl w-80 rounded-xl p-4 border border-gray-100 z-50">
    <div v-for="(cartItem, index) in getShoppingCartLists" :key="cartItem.id">
      <div
        v-if="cartItem.quantity"
        class="flex p-3 justify-between items-center transition-colors duration-200 hover:bg-gray-50 rounded-lg"
        :class="{
          'border-b border-gray-200 mb-2':
            getShoppingCartLists.length != index + 1,
        }"
      >
        <div class="flex">
          <img
            class="w-12 h-12 object-cover rounded-lg shadow-sm"
            :src="cartItem.imgName"
            :alt="cartItem.name"
          />

          <div class="ml-3">
            <p class="font-semibold text-gray-800 text-sm">{{ cartItem.name }}</p>

            <div class="flex items-center">
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded transition-colors duration-200 text-xs"
                @click="descreaseCartQuantity(cartItem.id)"
              >
                -
              </button>
              <p class="font-bold mx-2 text-gray-700 text-sm">
                {{ getProductQuantityById(cartItem.id) }}
              </p>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded transition-colors duration-200 text-xs"
                @click="increaseCartQuantity(cartItem.id)"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold text-green-600 text-sm">${{ cartItem.quantity * (cartItem.price || 0) }}</p>
        </div>
        <svg
          @click="removeCartItem(cartItem.id)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          class="fill-red-500 hover:fill-red-600 cursor-pointer transition-colors duration-200"
        >
          <path
            d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"
          />
        </svg>
      </div>
    </div>
    <button class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md mt-4">
      Checkout
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart.store";

const cartStore = useCartStore();

const { getShoppingCartLists } = storeToRefs(cartStore);
const { getProductQuantityById } = storeToRefs(cartStore);

const increaseCartQuantity = (productId: number) => {
  cartStore.increaseCartQuantity(productId);
};
const descreaseCartQuantity = (productId: number) => {
  cartStore.descreaseCartQuantity(productId);
};
const removeCartItem = (productId: number) => {
  cartStore.removeCartItem(productId);
};
</script>
