export const state = () => ({
  brands: [],
  selectedBrand: null
})

export const getters = {
  brandList(state) {
    return state.brands;
  },
  selectedBrand(state) {
    return state.selectedBrand;
  }
}


export const mutations = {
  updateBrands(state, brands) {
    state.brands = brands
  },
  updateSelectedBrand(state, newSelectedBrand) {
    if (state.selectedBrand === newSelectedBrand) {
      return state.selectedBrand = null;
    }
    state.selectedBrand = newSelectedBrand
  }
}

export const actions = {
  async getBrands(ctx) {
    const brands = await require('/assets/brands.json')
    ctx.commit('updateBrands', brands)
  },
  setSelectedBrand(ctx, item) {
    ctx.commit('updateSelectedBrand', item)
  }
}
