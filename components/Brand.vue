<template>
  <v-list-item @click.prevent="$emit('set-brand', brand)">
    <v-list-item-title v-text="brand.title"></v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: 'AppBrand',
  props: {
    brand: {
      type: Object,
      require: true,
    }
  }
}
</script>
