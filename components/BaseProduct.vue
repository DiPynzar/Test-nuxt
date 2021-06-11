<template>
  <v-card hover rounded max-width="270">
    <v-img
      :src="product.image"
      :alt="product.title"
      class="align-center"
    >
    </v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <v-row align="start"
             class="mx-0"
      >
          <span class="text-subtitle-1 font-weight-medium mr-2">
            {{ product.regular_price.currency}}
          </span>
        <span class="text-subtitle-1 font-weight-medium">
            {{ product.regular_price.value }}
          </span>
      </v-row>
      <div class="text-subtitle-2 text-left mt-2">
        {{ product.brand }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn block @click.prevent=addToCart(product)>Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'AppBaseProduct',
  props: {
    product: {
      type: Object,
      require: true,
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart'
    })
  }
}
</script>
