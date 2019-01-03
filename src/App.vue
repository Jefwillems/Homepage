<template>
  <VApp dark>
    <VToolbar
      app
      fixed
      clipped-left
    >
      <VToolbarSideIcon @click.stop="drawer = !drawer" />
      <VToolbarTitle>Home</VToolbarTitle>
    </VToolbar>
    <NavDrawer :drawer="drawer" />
    <VContent class="py-0">
      <WeatherWidget />
    </VContent>
    <VFooter
      app
      fixed
    >
      <span>&copy; 2018 Jef Willems</span>
    </VFooter>
  </VApp>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',
  components: { WeatherWidget, NavDrawer },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
