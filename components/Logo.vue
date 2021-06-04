<template>
  <div class="logo">
    <img :src="'/images/logo.png'" alt="">
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss">
.logo {
  & {
    width: 150px;
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
