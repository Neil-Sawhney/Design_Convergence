<script setup lang="ts">
import type { CatalogProduct } from '~/data/catalog';

const props = defineProps<{
  product: CatalogProduct;
}>();

const selectedVariant = ref(0);
const activeVariant = computed(() => props.product.variants?.[selectedVariant.value]);
const selectedImage = ref(0);
const displayPrice = computed(() =>
  props.product.variants ? activeVariant.value?.price : props.product.price,
);

const activeImages = computed(() => {
  if (props.product.variants) {
    return activeVariant.value?.images ?? [];
  }
  return props.product.images ?? [];
});

const selectVariant = (index: number) => {
  selectedVariant.value = index;
  selectedImage.value = 0;
};

watch(
  () => [props.product.id, selectedVariant.value],
  () => {
    selectedImage.value = 0;
  },
  { immediate: true },
);

watch(activeImages, (images) => {
  if (selectedImage.value >= images.length) {
    selectedImage.value = 0;
  }
});
</script>

<template>
  <article class="card">
    <h3>{{ product.name }}</h3>
    <p class="price-line" v-if="displayPrice && !product.variants">{{ displayPrice }}</p>
    <p class="description">{{ product.description }}</p>
    <ul v-if="product.features?.length" class="feature-list">
      <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
    </ul>
    <div class="media">
      <div class="hero-media" v-if="activeImages.length">
        <img
          class="hero-image"
          :key="activeImages[selectedImage]?.src"
          :src="activeImages[selectedImage]?.src"
          :alt="activeImages[selectedImage]?.alt"
          loading="lazy"
          decoding="async"
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
    <div class="card-actions" v-if="product.variants">
      <div class="variant-selector">
        <button
          v-for="(variant, index) in product.variants"
          :key="variant.id"
          class="variant-chip"
          :class="{ active: selectedVariant === index }"
          type="button"
          @click="selectVariant(index)"
        >
          {{ variant.label }}
        </button>
      </div>
      <div class="variant-list">
        <div class="variant">
          <div class="variant-text">
            <span class="price">{{ activeVariant?.price }}</span>
          </div>
          <a class="button" :href="activeVariant?.buyUrl" rel="noopener" target="_blank">
            Buy now
          </a>
        </div>
      </div>
    </div>
    <div class="card-actions" v-else>
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
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 380px;
  width: 100%;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.description {
  color: #b1bac9;
  margin: 0;
}

.price-line {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
}

.feature-list {
  margin: 0;
  padding-left: 1.1rem;
  color: #b1bac9;
  display: grid;
  gap: 0.3rem;
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
  gap: 0.55rem;
}

.card-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.hero-media {
  width: 100%;
  border-radius: 16px;
  border: 1px solid #20242e;
  background: #0f1218;
  display: grid;
  place-items: center;
  padding: 0.5rem;
  min-height: 200px;
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 240px;
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
  gap: 0.4rem;
}

.variant-chip {
  border-radius: 999px;
  border: 1px solid #2a2f3b;
  background: transparent;
  color: #e7e9ee;
  padding: 0.28rem 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
}

.variant-chip:hover {
  border-color: rgba(45, 212, 191, 0.45);
  background: rgba(45, 212, 191, 0.04);
}

.variant-chip.active {
  background: #2a2f3b;
  border-color: #3a4152;
}

.variant-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  width: 100%;
}

.variant {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
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
  font-size: 1rem;
}

@media (max-width: 720px) {
  .card {
    max-width: 100%;
  }

  .hero-image {
    max-height: none;
  }

  .thumb {
    width: 46px;
    height: 46px;
  }

  .hero-media {
    min-height: 180px;
  }
}
</style>
