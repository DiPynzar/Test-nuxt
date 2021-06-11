<template>
  <v-container>
    <h2>All Brands</h2>
    <v-list>
      <v-list-item-group>
        <AppBrand
          v-for="item in brandList"
          :key="item.id"
          :brand="item"
        />
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import AppBrand from "~/components/Brand";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AppBrandList',
  components: {AppBrand},
  computed: {
    ...mapGetters({
      brandList: 'brand/brandList'
    })
  },
  methods: {
    ...mapActions({
      getBrands: 'brand/getBrands'
    })
  },
  async mounted() {
    this.getBrands();
  }
}

</script>
