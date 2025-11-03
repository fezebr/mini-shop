<template>
  <section class="container mx-auto px-6 py-6">
    <div class="flex gap-4">
      <XSelectBox 
        v-model="category" 
        :options="categoryOptions" 
        placeholder="Category" 
        class="w-36"
      />
      <XSelectBox 
        v-model="sort" 
        :options="sortOptions" 
        placeholder="Sort by" 
        class="w-40"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import XSelectBox from "./ui/Xselect.vue";

  const sort = defineModel<string>("sort");
  const category = defineModel<string>("category");

  const categoryOptions = [
    { value: "", label: "All" },
    { value: "watch", label: "Watch" },
    { value: "phone", label: "Phone" },
  ];

  const sortOptions = [
    { value: "", label: "Default" },
    { value: "price-low", label: "Price ↑" },
    { value: "price-high", label: "Price ↓" },
    { value: "name", label: "Name" },
  ];
</script>
