<script>
export default {
  props: {
    productName: {
      type: String,
      default: 'Este es el product name'
    },
    urlImage: {
      type: String,
      default: ''
    }

  }
}
</script>
<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="urlImage" alt="">
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ productName }}</h3>
    </div>
  </div>
</template>
<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-basis: 500px;
  max-width: 400px;
  height: 300px;
  border-radius: 20px;
  border: 1px solid #414141;
  overflow: hidden;
  cursor: pointer;
}

.product-image {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
.product-image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-info {
  padding: 15px 20px;
}
</style>