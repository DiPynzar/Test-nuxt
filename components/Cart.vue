<template>
  <div class="mini-cart">
      <img src="/images/cart.png" alt="">
      <span v-show="inCartItemsQty > 0" class="qty">{{inCartItemsQty}}</span>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    inCartItems: {
      type: Array,
      default: null
    },
    inCartItemsQty: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss">
.mini-cart {
  & {
    cursor: pointer;
    position: relative;
    width: 50px;
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
  }

  .qty {
    position: absolute;
    right: 0;
    top: 10px;
    padding: 5px;
    background-color: darkred;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    text-align: center;
    transition: all 2s;
  }
}
</style>
