<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center flex-col hover:shadow-xl"
  >
    <div class="flex justify-center items-center">
      <img class="w-40 h-40" :src="product.imgName" :alt="product.name" />
    </div>
    <div class="bg-gray-100 w-full p-3">
      <div class="flex justify-between">
        <p class="text-lg">{{ product.price }}$</p>
        <p class="text-lg text-primary">{{ product.name }}</p>
      </div>

      <div class="flex justify-center mt-3">
        <button
          v-if="!getProductQuantityById(product.id)"
          class="bg-green-primary text-white p-2 rounded"
          @click="increaseCartQuantity(product.id)"
        >
          Add to cart
        </button>

        <div v-else class="flex items-center">
          <button
            class="font-bold rounded bg-red-300 px-4 py-1 text-lg text-center"
            @click="descreaseCartQuantity(product.id)"
          >
            -
          </button>
          <p class="font-bold text-lg mx-5">
            {{ getProductQuantityById(product.id) }}
          </p>
          <button
            class="font-bold rounded bg-green-300 px-4 py-1 text-lg text-center"
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
import { useCartStore } from "~/store/cart.store";
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
