<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center flex-col"
  >
    <div class="flex justify-center items-center">
      <img class="w-40 h-40" :src="product.imgName" :alt="product.name" />
    </div>
    <div class="bg-gray-100 w-full p-3">
      <div class="flex justify-between">
        <p>{{ product.price }}$</p>
        <p>{{ product.name }}</p>
      </div>

      <div class="flex justify-center mt-3">
        <button class="bg-primary text-white p-2 rounded">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

defineProps({
  product: {
    type: Object,
  },
});
</script>
