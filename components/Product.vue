<template>
  <div>
    <span @click.prevent="clickToSpan">Simple Product</span>
<!--    <span @click.prevent="testMethod">{{test}}</span><span>{{test2}}</span>-->
  </div>
</template>
<script>
// import AppBaseProduct from '~component/BaseProduct'
// import testMixin from '~/mixins/t4est'

export default {
  name: 'AppSimpleProduct',
  // extends: 'AppBaseProduct',
  // mixins: [testMixin],
  data() {
    return {
      test: 'ololo'
    }
  },
  // methods: {
  //   clickToSpan() {
  //     alert('click to simple')
  //   }
  // }
}
</script>
