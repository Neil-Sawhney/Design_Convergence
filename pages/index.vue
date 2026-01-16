<script setup lang="ts">
import { categories } from '~/data/catalog';

const wideLogo = new URL('../assets/wide_logo.webp', import.meta.url).href;
</script>

<template>
  <main class="page">
    <header class="hero">
      <img class="logo" :src="wideLogo" alt="Design Convergence logo" />
      <p class="eyebrow">Welcome to our store</p>
      <h1>Design Convergence</h1>
      <p class="subtitle">Browse our latest products.</p>
    </header>

    <section class="category" v-for="category in categories" :key="category.id">
      <div class="category-header">
        <div>
          <p class="category-eyebrow">Category</p>
          <h2>{{ category.title }}</h2>
          <p class="category-description">{{ category.description }}</p>
        </div>
        <NuxtLink class="button ghost" :to="category.route">View category</NuxtLink>
      </div>
      <section class="grid">
        <ProductCard
          v-for="product in category.products"
          :key="product.id"
          :product="product"
        />
      </section>
    </section>
  </main>
</template>
