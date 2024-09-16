<script>
import ProductCard from '@/components/ProductCard.vue'
import { productsService } from '../../services/products.service'


export default {
  data(){
    return {
      service: productsService
    }
  },
  components: {
    ProductCard
  },
  methods: {
    goToProductDetail(product) {
      this.$router.push({
        name: 'product',
        params: {
          id: product.id
        }
      })
    }
  },
  computed: {
    products(){
      return this.service.getProducts()
    }
  }
}
</script>
<template>
  <div class="section-header">
    <h1>Products</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus varius ex vel iaculis. Ut in ante nulla.
      Phasellus metus eros, ullamcorper vitae lacus sit amet.
    </p>
  </div>
  <div class="products">
    <ProductCard 
      v-for="product in products" :key="product.id"
      :urlImage="product.urlImage"
      :productName="product.productName"
      @click="goToProductDetail(product)"
    />
  </div>
</template>
<style>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>