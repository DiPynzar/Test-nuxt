<template>
  <div>
    <h2 @click.prevent="$emit('unset-brand')">All Brands</h2>
    <ul class="brand-list" >
      <li v-for="item in brands"
          :key="item.id"
          class="brand-item"
          @click.prevent="$emit('set-brand', item)"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'AppBrandList',
  props: {
    brands: {
      type: Array,
      required: true
    }
  }
}

</script>

<style lang="scss">
h2 {
  cursor: pointer;
}
.brand-list {
  border-right: 2px solid gray;
  margin-right: 20px;
  padding: 10px 20px;
}

.brand-item {
  .brand-list {
    margin-bottom: 10px;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    font-weight: bold;
  }
}
</style>
