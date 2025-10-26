<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <NavBar />
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="product in productList"
          :key="product.id"
          class="transform transition-transform duration-300 hover:scale-105"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "@/components/ProductItem.vue";
import productList from "./data/products.json";
import NavBar from "@/components/NavBar.vue";
</script>
