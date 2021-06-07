<template>
  <div>
    <h2 @click.prevent="$emit('unset-brand')">All Brands</h2>
    <v-list>
      <v-list-item-group>
        <AppBrand
          v-for="item in brands"
          :key="item.id"
          :brand="item"
          @set-brand="$emit('set-brand', item)"
        />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import AppBrand from "~/components/Brand";

export default {
  name: 'AppBrandList',
  components: {AppBrand},
  props: {
    brands: {
      type: Array,
      required: true
    }
  }
}

</script>
