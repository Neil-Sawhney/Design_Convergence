<script setup lang="ts">
const products = [
  {
    name: 'Item One',
    description: 'Short description for your first item.',
    price: '$19.00',
    buyUrl: 'https://buy.stripe.com/your-link-1',
  },
  {
    name: 'Item Two',
    description: 'Short description for your second item.',
    price: '$29.00',
    buyUrl: 'https://buy.stripe.com/your-link-2',
  },
  {
    name: 'Item Three',
    description: 'Short description for your third item.',
    price: '$39.00',
    buyUrl: 'https://buy.stripe.com/your-link-3',
  },
];
</script>

<template>
  <main class="page">
    <header class="hero">
      <p class="eyebrow">Simple, static storefront</p>
      <h1>My Store</h1>
      <p class="subtitle">
        Three items, Stripe Payment Links, and zero backend.
      </p>
    </header>

    <section class="grid">
      <article v-for="product in products" :key="product.name" class="card">
        <h2>{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <div class="row">
          <span class="price">{{ product.price }}</span>
          <a class="button" :href="product.buyUrl" rel="noopener" target="_blank">
            Buy now
          </a>
        </div>
      </article>
    </section>

    <footer class="footer">
      <p>
        Replace the Payment Link URLs in <code>pages/index.vue</code> with your
        Stripe links.
      </p>
    </footer>
  </main>
</template>

<style scoped>
:global(body) {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  margin: 0;
  background: #0b0c10;
  color: #e7e9ee;
}

.page {
  min-height: 100vh;
  padding: 3rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  color: #98a2b3;
}

.subtitle {
  max-width: 40rem;
  color: #cbd5e1;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

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

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.price {
  font-weight: 600;
  font-size: 1.1rem;
}

.button {
  background: #4f46e5;
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
}

.button:hover {
  background: #6366f1;
}

.footer {
  font-size: 0.9rem;
  color: #98a2b3;
}

code {
  color: #e2e8f0;
}
</style>
