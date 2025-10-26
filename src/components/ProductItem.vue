<template>
  <div
    class="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100"
  >
    <div class="flex justify-center items-center p-4 bg-gradient-to-br from-gray-50 to-white">
      <img class="w-40 h-40 object-cover rounded-lg" :src="product.imgName" :alt="product.name" />
    </div>
    <div class="p-4">
      <div class="flex justify-between items-center mb-3">
        <p class="text-lg font-bold text-green-600">${{ product.price }}</p>
        <p class="text-sm font-semibold text-gray-800">{{ product.name }}</p>
      </div>

      <div class="flex justify-center mt-3">
        <button
          v-if="!getProductQuantityById(product.id)"
          class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
          @click="increaseCartQuantity(product.id)"
        >
          Add to Cart
        </button>

        <div v-else class="flex items-center justify-center space-x-3">
          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded transition-colors duration-200"
            @click="descreaseCartQuantity(product.id)"
          >
            -
          </button>
          <p class="font-bold text-lg text-gray-800 min-w-[2rem] text-center">
            {{ getProductQuantityById(product.id) }}
          </p>
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-1 rounded transition-colors duration-200"
            @click="increaseCartQuantity(product.id)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart.store";
import { storeToRefs } from "pinia";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const { getProductQuantityById } = storeToRefs(cartStore);
 
const increaseCartQuantity = (productId: number) => {
  cartStore.increaseCartQuantity(productId);
};
const descreaseCartQuantity = (productId: number) => {
  cartStore.descreaseCartQuantity(productId);
};
</script>
