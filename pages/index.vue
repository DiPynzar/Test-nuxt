<template>
<div>
    <v-container
      class="page-top"
      cols="12"
      sm="12"
      md="4"
      lg="4"
      xl="3"
    >
      <v-row class="justify-space-between">
        <Logo/>
        <Cart/>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="flex-wrap">
        <v-col class="brands" xs="12" sm="3" >
          <AppBrandList/>
        </v-col>
        <v-col class="products flex-sm-grow-1">
          <AppProductList
            :products="filteredProductList"
          />
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<script>
import AppProductList from "~/components/ProductList";
import AppBrandList from "~/components/BrandList";
import Logo from "~/components/Logo";
import Cart from "~/components/Cart";
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    AppBrandList,
    AppProductList,
    Logo,
    Cart
  },
  methods: {
    ...mapActions({
      getProducts: 'product/getProducts'
    })
  },
  computed: {
    ...mapGetters({
      productList: 'product/productList',
      selectedBrand: 'brand/selectedBrand'
    }),
    filteredProductList() {
      if (!this.selectedBrand) {
        return this.productList
      }
      return this.productList.filter((item) => item.brand === this.selectedBrand.id)
    }
  },
  async mounted() {
    this.getProducts()
  }
}

</script>
