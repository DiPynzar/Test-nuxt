<template>
  <div class="page-wrapper">
    <div class="page-top">
      <Logo></Logo>
      <Cart :in-cart-items="inCartItems"
            :in-cart-items-qty="inCartItemsQty"
      />
    </div>
    <div class="main">
      <div class="brands">
        <AppBrandList
          :brands="brands"
          @set-brand="setBrand"
          @unset-brand="unSetBrand"
        />
      </div>
      <div class="products">
        <AppProductList
          :products="filteredProductList"
          :selected-brand="selectedBrand"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
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
      if(brand && this.selectedBrand) {
        return this.selectedBrand = null;
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

<style lang="scss">

.page-wrapper {
  display: flex;
  flex-direction: column;
}

.page-top {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  margin-bottom: 30px;
  padding: 20px 10px;
}

.main {
  display: flex;
}

.brands {
  flex: 1 20%;
  width: 20%;
  margin-right: 20px;
}

.products {
  flex: 1 80%;
  width: 80%;
}

</style>
