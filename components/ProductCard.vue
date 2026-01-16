<script setup lang="ts">
import type { CatalogProduct } from '~/data/catalog';

const props = defineProps<{
  product: CatalogProduct;
}>();

const selectedVariant = ref(0);
const activeVariant = computed(() => props.product.variants?.[selectedVariant.value]);
const selectedImage = ref(0);

const activeImages = computed(() => {
  if (props.product.variants) {
    return activeVariant.value?.images ?? [];
  }
  return props.product.images ?? [];
});

watch(
  () => [props.product.id, selectedVariant.value],
  () => {
    selectedImage.value = 0;
  },
  { immediate: true },
);
</script>

<template>
  <article class="card">
    <h3>{{ product.name }}</h3>
    <p class="description">{{ product.description }}</p>
    <ul v-if="product.features?.length" class="feature-list">
      <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
    </ul>
    <div class="media">
      <div class="hero-media" v-if="activeImages.length">
        <img
          class="hero-image"
          :src="activeImages[selectedImage]?.src"
          :alt="activeImages[selectedImage]?.alt"
          loading="lazy"
        />
      </div>
      <div class="thumbnail-row" v-if="activeImages.length > 1">
        <button
          v-for="(image, index) in activeImages"
          :key="image.src"
          class="thumb"
          :class="{ active: selectedImage === index }"
          type="button"
          @click="selectedImage = index"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
        </button>
      </div>
    </div>
    <div v-if="product.variants">
      <div class="variant-selector">
        <button
          v-for="(variant, index) in product.variants"
          :key="variant.id"
          class="variant-chip"
          :class="{ active: selectedVariant === index }"
          type="button"
          @click="selectedVariant = index"
        >
          {{ variant.label }}
        </button>
      </div>
      <div class="variant-list">
        <div class="variant">
          <div class="variant-text">
            <span class="variant-label">Selected variant</span>
            <span class="price">{{ activeVariant?.price }}</span>
          </div>
          <a class="button" :href="activeVariant?.buyUrl" rel="noopener" target="_blank">
            Buy now
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <span class="price">{{ product.price }}</span>
        <a class="button" :href="product.buyUrl" rel="noopener" target="_blank">
          Buy now
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: #12141a;
  border: 1px solid #20242e;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.description {
  color: #b1bac9;
  margin: 0;
}

.feature-list {
  margin: 0;
  padding-left: 1.2rem;
  color: #b1bac9;
  display: grid;
  gap: 0.4rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.media {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hero-media {
  width: 100%;
  border-radius: 16px;
  border: 1px solid #20242e;
  background: #0f1218;
  aspect-ratio: 4 / 3;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.thumbnail-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.thumb {
  border: 1px solid #20242e;
  border-radius: 10px;
  padding: 0;
  background: #0f1218;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb.active {
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1 inset;
}

.variant-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.variant-chip {
  border-radius: 999px;
  border: 1px solid #2a2f3b;
  background: transparent;
  color: #e7e9ee;
  padding: 0.35rem 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.variant-chip.active {
  background: #2a2f3b;
  border-color: #3a4152;
}

.variant-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.variant {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.variant-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.variant-label {
  font-weight: 600;
}

.price {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>
