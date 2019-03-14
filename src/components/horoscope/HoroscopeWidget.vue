<template>
  <VFlex
    :xs6="xs6"
    :xs12="xs12"
  >
    <VCard
      color="blue-grey darken-2"
      class="white--text"
    >
      <VCardTitle primary-title>
        <div>
          <div class="headline">
            {{ day }}
          </div>
          <span class="horoscope-text">
            {{ horoscope.description }}
          </span>
        </div>
      </VCardTitle>
    </VCard>
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
