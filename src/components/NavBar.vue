<template>
  <header class="flex justify-between items-center">
    <h1>Products</h1>
    <div class="relative">
      <img
        src="src/assets/shopping-cart.png"
        alt="shopping cart"
        class="w-10 h-10"
      />
      <span
        class="absolute top-[-20px] left-[-7px] inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 relative px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-primary text-white"
      >
        {{ totalNumber }}
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cart.store";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();

const { totalNumber } = storeToRefs(cartStore);
</script>
