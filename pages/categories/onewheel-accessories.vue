<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';
import { categories } from '~/data/catalog';

const category = categories.find((item) => item.id === 'onewheel-accessories');
</script>

<template>
  <main class="page" v-if="category">
    <header class="hero hero--compact">
      <NuxtLink class="back-link" to="/">Back to home</NuxtLink>
      <h1>{{ category.title }}</h1>
      <p class="subtitle">{{ category.description }}</p>
    </header>
    <section class="grid">
      <ProductCard v-for="product in category.products" :key="product.id" :product="product" />
    </section>
  </main>
</template>
