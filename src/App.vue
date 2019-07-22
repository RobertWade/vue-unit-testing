<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $secondary;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
