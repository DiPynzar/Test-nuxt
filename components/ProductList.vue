<template>
  <div>
    <h1>Catalog</h1>
    <ul class="product-list">
      <li v-for="item in products"
          :key="item.id"
          class="product-item">
        <img :src="item.image" alt=""/>
        <span>{{ item.title }}</span>
        <div class="brand">{{ item.brand }}</div>
        <div class="price">
          <span>{{ item.regular_price.currency }}</span>
          <span>{{ item.regular_price.value }}</span>
        </div>
        <button class="action add-to-cart" @click.prevent="$emit('add-to-cart', item)"><span>Add to cart</span></button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'AppProductList',
  props: {
    products: {
      type: Array,
      required: true,
    },
    selectedBrand: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  & {
    flex: 0 1 25%;
    width: 25%;
    min-height: 150px;
    padding: 10px;
  }

  img {
    height: auto;
    width: 100%;
  }
}

.add-to-cart {
  span {
    &::before {
      content: '+';
      width: 30px;
      height: 30px;
      display: inline-block;
    }
  }
}

.action {
  padding: 10px 20px 5px 10px;
  margin: 10px 0;
  border-radius: 40px;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
