<template>
  <v-container>
    <h2 class="mb-4">Catalog</h2>
    <v-row v-if="Array.isArray(products) && products.length">
      <v-fade-transition group class="row" style="min-width: 50vh">
        <v-col v-for="item in products"
               :key="item.id"
               class="product-item"
               cols="12" sm="6" md="4" lg="4" xl="3"
        >
          <AppBaseProduct :product="item"/>
        </v-col>
      </v-fade-transition>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        No products
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import AppBaseProduct from "~/components/product/BaseProduct";

export default {
  components: {
    AppBaseProduct,
  },
  name: 'AppProductList',
  props: {
    products: {
      type: Array,
      require: true
      }
    }
}
</script>
