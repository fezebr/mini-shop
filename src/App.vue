<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    <ProductFilterBar v-model:category="category" v-model:sort="sort" v-model:search="search" />
    <ProductGrid />
  </div>
</template>

<script setup lang="ts">
  import NavBar from "@/components/NavBar.vue";
  import ProductGrid from "@/components/ProductGrid.vue";
  import { ref } from "vue";
  import ProductFilterBar from "./components/ProductFilterBar.vue";

  const category = ref("");
  const sort = ref("");
  const search = ref("");
</script>
