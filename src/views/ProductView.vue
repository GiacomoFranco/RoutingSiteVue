<script>
import { productsService } from '../../services/products.service'

export default {
  data() {
    return {
      service: productsService 
    }
  },
  props: {
      id: {
        type: String,
      }
  },
  computed: {
    product(){
      const products = this.service.getProducts();  
      return products.find(product => product.id == this.id )
    },
    productName(){
      return this.product?.productName
    },
    urlImage(){
      return this.product?.urlImage
    }
  }
}
</script>
<template>
    <h1>{{ productName }}</h1>
    <img :src="urlImage" alt="">
    <p>Suspendisse vitae dolor quis lorem hendrerit rutrum. Aliquam egestas malesuada tincidunt. Quisque rutrum nunc mauris,
    a pellentesque mi pretium sit amet. Nullam at pretium mi. Duis vitae mollis nisi. Nunc sit amet pretium ante.
    Phasellus rhoncus nunc placerat nulla viverra, ut vulputate mi volutpat. Nam eu ipsum eu augue euismod fermentum non
    quis purus. Etiam iaculis risus at elit bibendum, sed pellentesque dui mollis. Cras tempor lobortis tortor, vitae
    luctus mauris tristique ut.
    </p>
</template>