<template>
  <v-app
    id="app"
    dark
  >
    <NavDrawer :drawer="drawer" />
    <v-app-bar
      app
      dense
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Home</v-toolbar-title>
    </v-app-bar>
    <VContent>
      <Widgets />
    </VContent>
    <VFooter
      app
      fixed
    >
      <span>&copy; 2018 Jef Willems</span>
    </VFooter>
  </v-app>
</template>

<script>
import Widgets from './components/Widgets.vue';
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',
  components: { Widgets, NavDrawer },
  data() {
    return {
      drawer: false,
    };
  },
  async beforeCreate() {
    await this.$store.commit('initialiseStore');
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
}
* {
  font-size: 16px;
}
</style>
