<template>
  <VFlex
    :xs6="xs6"
    :xs12="xs12"
    class="px-0"
  >
    <v-card
      color="blue-grey darken-2"
      class="white--text"
    >
      <v-toolbar
        :elevation="0"
        dense
        color="blue-grey darken-3"
      >
        <v-spacer />
        <v-toolbar-title>{{ day }}</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="body-1">
        {{ horoscope.description }}
      </v-card-text>
    </v-card>
  </VFlex>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    xs6: { default: false, type: Boolean },
    xs12: { default: false, type: Boolean },
    day: { default: 'today', type: String },
  },
  computed: {
    ...mapGetters('horoscope', ['today', 'tomorrow']),
    horoscope() {
      return this[this.$props.day];
    },
  },
};
</script>
<style scoped>
.horoscope-text {
  max-width: 75%;
  display: inline-block;
}
</style>
