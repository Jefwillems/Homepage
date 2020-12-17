<template>
  <div>
    <h3 class="grey--text text--lighten-2">
      Lights
    </h3>
    <v-slider
      min="0"
      max="254"
      @end="updateLightValues"
    />
  </div>
</template>

<script>
export default {
  name: 'HueLight',
  components: {},
  data() {
    return {};
  },
  methods: {
    updateLightValues(value) {
      this.$store.dispatch('huemodule/updateLights', value);
    },
  },
};
</script>
