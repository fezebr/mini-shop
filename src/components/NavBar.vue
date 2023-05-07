<template>
  <header class="flex justify-between items-center bg-orange-500 px-6 py-2">
    <h1 class="font-bold">MINI SHOPPING</h1>
    <div class="relative flex items-center">
      <div
        @mouseover="showCartBoxHandler(true)"
        @mouseleave="showCartBoxHandler(false)"
        v-if="totalNumber"
      >
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
        <!-- v-show="showCartBox" -->
        <ShoppingCart
          class="absolute top-10 left-[-250px]"
          @mouseover="showCartBoxHandler(true)"
          @mouseleave="showCartBoxHandler(false)"
          v-show="showCartBox"
        />
      </div>
      <div v-else>
        <img
          src="src/assets/shopping-cart.png"
          alt="shopping cart"
          class="w-10 h-10"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ShoppingCart from "~/components/ShoppingCart.vue";
import { useCartStore } from "~/store/cart.store";
import { storeToRefs } from "pinia";
import { Ref, ref } from "vue";
const cartStore = useCartStore();

const { totalNumber } = storeToRefs(cartStore);

const showCartBox: Ref<boolean> = ref(false);
const showCartBoxHandler = (boolean: boolean) => (showCartBox.value = boolean);
</script>
