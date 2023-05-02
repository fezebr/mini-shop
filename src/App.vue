<template>
  <div class="m-5">
    <h1 class="mb-10">Products</h1>

    <div class="flex flex-wrap -mx-4">
      <div
        v-for="product in productList"
        :key="product.id"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8rounded m-5"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "~/components/ProductItem.vue";
import productList from "~/data/products.json";
</script>
