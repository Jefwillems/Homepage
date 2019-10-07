<template>
  <VLayout
    column
    justify-center
    class="mt-2"
  >
    <v-select
      :items="items"
      filled
      value="gemini"
      @change="changeSign"
    />
    <HoroscopeWidget day="today" />
    <HoroscopeWidget day="tomorrow" />
  </vlayout>
</template>

<script>
import HoroscopeWidget from './HoroscopeWidget.vue';
import { actions, mutations } from '../../store/types';

export default {
  components: { HoroscopeWidget },
  data() {
    return {
      items: [
        { value: 'gemini', text: 'Gemini' },
        { value: 'pisces', text: 'Pisces' },
      ],
    };
  },
  created() {
    this.$store.dispatch(`horoscope/${actions.FETCH_HOROSCOPE}`);
  },
  methods: {
    changeSign(ev) {
      this.$store.commit(`horoscope/${mutations.UPDATE_SIGN}`, ev);
      this.$nextTick(() => {
        this.$store.dispatch(`horoscope/${actions.FETCH_HOROSCOPE}`);
      });
    },
  },
};
</script>
