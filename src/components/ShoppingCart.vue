<template>
  <div class="bg-white shadow-lg w-72 h-15 rounded p-2">
    <div v-for="(cartItem, index) in getShoppingCartLists" :key="cartItem.id">
      <div
        v-if="cartItem.quantity"
        class="flex p-2 justify-between items-center"
        :class="{
          'border-b-2 border-gray-300':
            getShoppingCartLists.length != index + 1,
        }"
      >
        <div class="flex">
          <img
            class="w-10 h-10 border-r border-gray-200"
            :src="cartItem.imgName"
            :alt="cartItem.name"
          />

          <div class="ml-2">
            <p>{{ cartItem.name }}</p>

            <div class="flex items-center">
              <button
                class="font-bold rounded bg-red-300 px-2 text-center"
                @click="descreaseCartQuantity(cartItem.id)"
              >
                -
              </button>
              <p class="font-bold mx-3">
                {{ getProductQuantityById(cartItem.id) }}
              </p>
              <button
                class="font-bold rounded bg-green-300 px-2 text-center"
                @click="increaseCartQuantity(cartItem.id)"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <p>{{ cartItem.quantity * (cartItem.price || 0) }}$</p>
        </div>
        <svg
          @click="removeCartItem(cartItem.id)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          class="fill-red-500"
        >
          <path
            d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"
          />
        </svg>
      </div>
    </div>
    <button class="w-full bg-green-primary text-white p-2 rounded mt-5">
      checkout
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
