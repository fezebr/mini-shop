<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <NavBar />
    <ProductGrid />
  </div>
</template>

<script setup lang="ts">
import ProductGrid from "@/components/ProductGrid.vue";
import NavBar from "@/components/NavBar.vue";
</script>
