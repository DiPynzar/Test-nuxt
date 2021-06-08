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
        <Logo></Logo>
        <Cart :in-cart-items="inCartItems"
              :in-cart-items-qty="inCartItemsQty"
        />
      </v-row>
    </v-container>
    <v-container>
      <v-row class="flex-wrap">
        <v-col class="brands">
          <AppBrandList
            :brands="brands"
            @set-brand="setBrand"
            @unset-brand="unSetBrand"
          />
        </v-col>
        <v-col class="products flex-sm-grow-1">
          <AppProductList
            :products="filteredProductList"
            :selected-brand="selectedBrand"
            @add-to-cart="addToCart"
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

export default {
  components: {
    AppBrandList,
    AppProductList,
    Logo,
    Cart
  },
  async asyncData() {
    const brands = await require('/assets/brands.json')
    const products = await require('/assets/products.json')
    return {
      brands,
      products
    }
  },
  data() {
    return {
      selectedBrand: null,
      inCartItems: [],
      inCartItemsQty: null
    }
  },
  methods: {
    setBrand(brand) {
      if (brand && this.selectedBrand) {
        return this.unSetBrand()
      }
      this.selectedBrand = brand;
    },
    unSetBrand() {
      this.selectedBrand = null;
    },
    addToCart(product) {
      this.inCartItems.push(product);
      this.inCartItemsQty += 1;
    }
  },
  computed: {
    filteredProductList() {
      if (!this.selectedBrand) {
        return this.products
      }
      return this.products.filter((item) => item.brand === this.selectedBrand.id)
    }
  }
}

</script>
