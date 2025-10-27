<template>
  <div
    class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
  >
    <div class="flex justify-center items-center p-6 bg-white">
      <img class="w-32 h-32 object-cover" :src="product.imgName" :alt="product.name" />
    </div>
    <div class="p-4 border-t border-gray-100">
      <div class="flex justify-between items-center mb-4">
        <p class="text-lg font-medium text-gray-900">${{ product.price }}</p>
        <p class="text-sm text-gray-600">{{ product.name }}</p>
      </div>

      <div class="flex justify-center mt-3">
        <button
          v-if="!getProductQuantityById(product.id)"
          class="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          @click="increaseCartQuantity(product.id)"
        >
          Add to Cart
        </button>

        <div v-else class="flex items-center justify-center space-x-3">
          <button
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-1 rounded transition-colors duration-200"
            @click="descreaseCartQuantity(product.id)"
          >
            -
          </button>
          <p class="font-medium text-gray-900 min-w-[2rem] text-center">
            {{ getProductQuantityById(product.id) }}
          </p>
          <button
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-1 rounded transition-colors duration-200"
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
