<template>
  <v-card hover rounded max-width="270">
    <v-img v-if="image != null "
           :src="image"
           :alt="product.title"
           class="align-center"
    />
    <v-img
      v-else
      :src="product.image"
      :alt="product.title"
      class="align-center"
    />
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <div class="text-subtitle-1 text-left mb-3">
        {{ product.brand }}
      </div>
      <v-row align="start"
             class="mx-0"
      >
          <span class="text-subtitle-1 font-weight-medium mr-2">
            {{ product.regular_price.currency }}
          </span>
        <span class="text-subtitle-1 font-weight-medium">
            {{ product.regular_price.value }}
          </span>
      </v-row>
      <v-row v-if="product.type === 'configurable'">
        <v-chip-group
          active-class="text--accent-4 active-chip"
          v-for="item in product.configurable_options"
          :key="item.attribute_id"
        >
          <v-chip v-for="value in item.values"
                  :key="value.value_index"
                  label
                  :value="value.label"
                  :color="value.value.length ? value.value : 'gray'"
                  class="ml-1 mr-1 swatch"
                  @click="setAttribute([item.attribute_code, value.value_index])"
          >
            <span v-if="item.attribute_code === 'size'"> {{ value.label }} </span>
          </v-chip>
        </v-chip-group>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if='product.type === "simple"'
             block
             @click.prevent=addToCart(product)
      >
        Add to cart
      </v-btn>
      <v-btn v-else
             block
             @click.prevent=addToCart(getCurrentVariantProductInfo())
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AppSwatches from "~/components/product/Swatches";

export default {
  name: 'AppBaseProduct',
  components: {AppSwatches},
  data() {
    return {
      id: null,
      image: null,
      sku: null,
      size: null,
      color: null,
    }
  },
  props: {
    product: {
      type: Object,
      require: true,
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'localStorage/addToCart'
    }),
    setAttribute(value) {
      value[0] === 'color'
        ? this.color = {"code": value[0], "value_index": value[1]}
        : this.size = {"code": 'size', "value_index": value[1]}

      this.getConfProductInfo();
    },

    getConfProductInfo() {
      const variants = this.product.variants;
      variants.map(item => {
        if (this._.isEqual(item.attributes, [this.color, this.size])) {
          let {id, sku, image} = item.product;
          this.id = id
          this.sku = sku
          this.image = image
          item.product.title = this.product.title
          item.product.regular_price = this.product.regular_price
          item.product.color = this.findSwatchLabel(this.color, this.product);
          item.product.size = this.findSwatchLabel(this.size, this.product);
          item.product.brand = this.product.brand
        }
      })
    },
    findSwatchLabel(attrName, product) {
       let attribute = product.configurable_options.filter(item => item.attribute_code === attrName.code)
      let values = attribute[0]['values'].filter(item => item.value_index === attrName.value_index);
      return values[0].label
    },
    getCurrentVariantProductInfo() {
      let currentVariantIndex = this.product.variants.findIndex((item) => this._.isEqual(item.attributes, [this.color, this.size]));
      let variant = {...this.product.variants[currentVariantIndex]}
      return variant.product;
    }
  }
}
</script>

<style lang="scss">
.active-chip {
  outline: 1px solid white;
}

.swatch {
  width: 35px;
}
</style>
