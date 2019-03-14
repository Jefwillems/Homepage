<template>
  <VLayout
    column
    justify-center
  >
    <HoroscopeWidget day="today" />
    <HoroscopeWidget day="tomorrow" />
  </vlayout>
</template>

<script>
import HoroscopeWidget from './HoroscopeWidget.vue';
import { actions } from '../../store/types';

export default {
  components: { HoroscopeWidget },
  created() {
    this.$store.dispatch(`horoscope/${actions.FETCH_HOROSCOPE}`);
  },
};
</script>
