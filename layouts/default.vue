<template>
  <v-app dark>
    <v-app-bar style="max-height: 100px">
      <v-row class="justify-space-between align-baseline">
      <Logo/>
      <Cart/>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "~/components/Logo";
import Cart from "~/components/Cart";
export default {
  components: {
    Logo,
    Cart
  }
}
</script>
