<template>
  <v-container
    class="page-top"
    cols="12"
    sm="12"
    md="12"
    lg="6"
    xl="6"
  >
    <h2> Shopping Cart</h2>
    <v-simple-table
      dense
      v-if="inCartProducts.length"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-center"
              cols="4"
              sm="3"
              md="4"
          >
            Item
          </th>
          <th class="text-left"
              cols="3"
              sm="2"
              md="3"
          >
            Price
          </th>
          <th class="text-left"
              cols="3"
              sm="2"
              md="3"
          >
            Qty
          </th>
          <th class="text-left"
              cols="3"
              sm="2"
              md="3"
          >
            Total
          </th>
        </tr>
        </thead>
        <tbody
        >
        <AppInCartItem
          v-for="item in inCartProducts"
          :key="item.sku"
          :product="item"
        />
        </tbody>
      </template>
    </v-simple-table>
    <div
      v-else
    >
      <v-divider/>
      <span> No items in cart yet.</span>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import AppInCartItem from "~/components/InCartItem"

export default {
  components: {
    AppInCartItem
  },
  computed: {
    ...mapGetters({
      inCartProducts: 'localStorage/inCartProductList'
    })
  }
}
</script>
