<template>
  <NuxtLink to="/cart">
    <v-img
      v-if="inCartItemsQty <= 0"
      src="/images/cart.png"
      alt="cart"
      max-height="50"
      max-width="50"
    />
    <v-badge v-else
             top
             bordered
             color="red darken-4"
             :content="inCartItemsQty"
             offset-x="20"
             offset-y="30"
    >
      <v-img
        src="/images/cart.png"
        alt="cart"
        max-height="50"
        max-width="50"
      />
    </v-badge>
  </NuxtLink>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      inCartItemsQty: 'localStorage/inCartItemsQty',
      inCartProductList: 'localStorage/inCartProductList'
    })
  }
}
</script>
