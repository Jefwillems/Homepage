<template>
  <div>
    <h3 class="grey--text text--lighten-2">
      Lights
    </h3>
    <v-switch
      v-model="localEnabled"
      :label="lightsEnabled ? 'On':'Off'"
      color="orange"
      @change="toggleLights"
    />
    <v-slider
      label="brightness"
      min="0"
      max="254"
      :thumb-label="true"
      @end="updateLightValues"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HueLight',
  components: {},
  data() {
    return {
      localEnabled: false,
      ...mapGetters('huemodule', ['lightsEnabled']),
    };
  },
  watch: {
    lightsEnabled: {
      handler(val) {
        this.localEnabled = val;
      },
      immediate: true,
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
