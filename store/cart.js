export const state = () => ({
  inCartProductList: [],
  inCartItemsQty: null
})

export const getters = {
  inCartProductList(state) {
    return state.inCartProductList;
  },
  inCartItemsQty(state) {
    return state.inCartItemsQty;
  },
}

export const mutations = {
  updateInCartProductList(state, product) {
    state.inCartProductList.push(product);
    state.inCartItemsQty += 1;
  },
}

export const actions = {
  addToCart(ctx, product) {
    ctx.commit('updateInCartProductList', product)
  }
}
