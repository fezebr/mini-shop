<template>
  <header class="flex justify-between items-center  bg-orange-400  shadow-lg px-8 py-4">
    <h1 class="text-2xl font-bold text-white tracking-wide">MINI SHOPPING App</h1>
    <div class="relative flex items-center">
      <div
        @mouseover="showCartBoxHandler(true)"
        @mouseleave="showCartBoxHandler(false)"
        v-if="totalNumber"
      >
        <img
          src="@/assets/shopping-cart.png"
          alt="shopping cart"
          class="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
        />
        <span
          class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse"
        >
          {{ totalNumber }}
        </span>
       
        <ShoppingCart
          class="absolute top-10 left-[-250px]"
          @mouseover="showCartBoxHandler(true)"
          @mouseleave="showCartBoxHandler(false)"
          v-show="showCartBox"
        />
      </div>
      <div v-else>
        <img
          src="@/assets/shopping-cart.png"
          alt="shopping cart"
          class="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200 opacity-70"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
 
import { storeToRefs } from "pinia";
import { Ref, ref } from "vue";
 ;
import ShoppingCart from "./ShoppingCart.vue";
import { useCartStore } from "../store/cart.store";
const cartStore = useCartStore();

const { totalNumber } = storeToRefs(cartStore);

const showCartBox: Ref<boolean> = ref(false);
const showCartBoxHandler = (boolean: boolean) => (showCartBox.value = boolean);
</script>
