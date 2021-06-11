<template>
  <v-list-item
    @click.prevent=setBrand(brand)
  >
    <v-list-item-title v-text="brand.title"/>
  </v-list-item>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'AppBrand',
  props: {
    brand: {
      type: Object,
      require: true,
    }
  },
  methods: {
    ...mapActions({
      setBrand: 'brand/setSelectedBrand'
    })
  }
}
</script>
