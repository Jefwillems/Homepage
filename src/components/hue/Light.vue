<template>
  <div>
    <h3 class="grey--text text--lighten-2">
      Lights
    </h3>
    <v-switch
      v-model="localEnabled"
      :label="localEnabled ? 'On':'Off'"
      color="orange"
    />
    <v-slider
      label="brightness"
      min="0"
      max="254"
      :thumb-label="true"
      :value="localBrightness"
      @end="localBrightness = $event"
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
  computed: {
    localEnabled: {
      get() {
        return this.$store.state.huemodule.lightsState[0].on;
      },
      set(val) {
        this.toggleLights(val);
      },
    },
    localBrightness: {
      get() {
        return this.$store.state.huemodule.lightsState[0].bri;
      },
      set(value) {
        this.updateLightValues(value);
      },
    },
  },
  mounted() {
    this.$store.dispatch('huemodule/fetchState');
  },
  methods: {
    updateLightValues(value) {
      this.$store.dispatch('huemodule/updateLights', value);
    },
    toggleLights(val) {
      this.$store.dispatch('huemodule/toggleLights', val);
    },
  },
};
</script>
