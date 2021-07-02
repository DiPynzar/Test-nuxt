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
    <v-simple-table dense>
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
        <tr
          v-for="item in inCartProducts"
          :key="item.sku"
        >
          <td>
            <v-row class="flex-nowrap align-center">
              <v-col
                cols="4"
                sm="3"
                md="4"
                style="max-width: 200px"
              >
                <v-img
                  :src="item.image"
                  class="align-center"
                />
              </v-col>
              <v-col
                cols="4"
                sm="2"
                md="3"
              >
                <span> {{ item.brand }} / {{ item.title }}</span>
              </v-col>
            </v-row>
          </td>
          <td>
            <v-col
              cols="4"
              sm="2"
              md="3"
            >
              <span>{{ item.regular_price.currency }} {{ item.regular_price.value }} </span>
            </v-col>
          </td>
          <td>
            <AppItemQty :qty="+item.qty" :itemId="item.id"/>
          </td>
          <td>
            <v-col
              cols="4"
              sm="2"
              md="3"
            >
             <span>
              {{ item.regular_price.currency }} {{ item.qty * item.regular_price.value }}
            </span>
            </v-col>
          </td>
          <td>
            <AppRemoveCartItemButton :itemId="item.id"/>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import AppItemQty from "~/components/ItemQty"
import AppRemoveCartItemButton from "~/components/RemoveCartItemButton"

export default {
  components: {
    AppRemoveCartItemButton,
    AppItemQty,
  },
  computed: {
    ...mapGetters({
      inCartProducts: 'localStorage/inCartProductList'
    })
  }
}
</script>
