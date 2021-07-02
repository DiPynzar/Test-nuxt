export const state = () => ({
  inCartProductList: [],
  inCartItemsQty: null,
  qty: null
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
    if (!state.inCartProductList.filter((item) => item.id === product.id).length) {
      state.inCartProductList.push(product);
      product['qty'] = 1;
      return state.inCartItemsQty += 1;
    }
    product['qty'] += 1;
    state.inCartItemsQty += 1;
  },

  updateItemQty(state, {newQty, id}) {
    state.inCartProductList.map((item) => {
      if ((item.id === id) && (newQty > 0)) {
        item.qty = newQty
      }
    })
  },

  updateInCartItemsQty(state) {
    let newAllItemsQty = 0;
    state.inCartProductList.map((item) => {
      newAllItemsQty += item.qty
    })
    state.inCartItemsQty = newAllItemsQty
  },

  removeItemFromCart(state, removedItemId) {
   const filteredItems = state.inCartProductList.filter((item) => item.id !== removedItemId)
    state.inCartProductList = filteredItems
  }
}

export const actions = {
  addToCart(ctx, product) {
    ctx.commit('updateInCartProductList', product)
  },
  updateItemQty(ctx, payload) {
    ctx.commit('updateItemQty', payload)
    ctx.commit('updateInCartItemsQty', payload)

  },
  removeItemFromCart(ctx, payload) {
    ctx.commit('removeItemFromCart', payload)
    ctx.commit('updateInCartItemsQty', payload)
  },
}
