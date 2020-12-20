<template>
  <v-col>
    <h3 class="grey--text text--lighten-2">
      Lights
    </h3>
    <v-row>
      <v-switch
        v-model="localEnabled"
        :label="localEnabled ? 'On':'Off'"
        color="orange"
      />
    </v-row>
    <v-row>
      <v-slider
        label="brightness"
        min="0"
        max="254"
        :thumb-label="true"
        :value="localBrightness"
        @end="localBrightness = $event"
      />
    </v-row>
    <v-row justify="center">
      <v-color-picker
        v-model="localColors"
        hide-canvas
        show-swatches
        swatches-max-height="100px"
        mode="rgba"
        hide-mode-switch
        hide-inputs
      />
    </v-row>
  </v-col>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'HueLight',
  components: {},
  data() {
    return {
      colors: '',
    };
  },
  computed: {
    localEnabled: {
      get() {
        return this.$store.getters['huemodule/rgbaColor'].enabled;
      },
      set(val) {
        this.toggleLightStates(val);
      },
    },
    localBrightness: {
      get() {
        return this.$store.getters['huemodule/rgbaColor'].a;
      },
      set(value) {
        this.updateLightValues(value);
      },
    },
    localColors: {
      get() {
        return this.$store.getters['huemodule/rgbaColor'];
      },
      set(rgba) {
        this.updateColors({ ...rgba });
      },
    },
  },
  created() {
    const updateColors = debounce(function updateColors(rgba) {
      console.log(rgba);
      this.$store.dispatch('huemodule/updateLights', rgba);
    }, 1000, { leading: true });
    this.updateColors = updateColors;
  },
  mounted() {
    this.$store.dispatch('huemodule/fetchState');
  },
  methods: {
    updateLightValues(value) {
      this.$store.dispatch('huemodule/updateLightsBrightness', value);
    },
    toggleLightStates(val) {
      this.$store.dispatch('huemodule/toggleLights', val);
    },

  },
};
</script>
<style>
.v-color-picker__sliders {
  display: none !important;
}
</style>
