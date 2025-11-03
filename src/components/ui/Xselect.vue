<template>
  <div class="relative" :class="width">
    <select
      v-model="model"
      class="appearance-none w-full px-6 py-4 rounded-md shadow-md light-background light-text border-none outline-none text-sm cursor-pointer"
    >
      <option value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-gray dark:text-very-light-gray"
    >
      <font-awesome-icon icon="chevron-down" />
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Option<T = string> {
    value: T;
    label: string;
  }

  const model = defineModel<string>();

  interface Props {
    options: Option[];
    placeholder: string;
    width?: string;
  }

  defineProps<Props>();
</script>
