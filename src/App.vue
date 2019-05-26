<template>
  <div id="app">
    <router-view class="application__container"/>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('user/login');
  },
};
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/layout';

body {
  margin: 0;
  padding: 0;

  // CSS Variables
  // Colors
  --application-color-primary: #E23434;
  --application-color-accent: #333745;
  --application-color-text: #FFF;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
               Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
