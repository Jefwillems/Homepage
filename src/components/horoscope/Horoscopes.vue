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

const capitalize = (word) => word.charAt(0).toUpperCase() + word.substr(1);

export default {
  components: { HoroscopeWidget },
  data() {
    return {
      items: [
        'aries',
        'taurus',
        'gemini',
        'cancer',
        'leo',
        'virgo',
        'libra',
        'scorpio',
        'sagittarius',
        'capricorn',
        'aquarius',
        'pisces',
      ].map((el) => ({ value: el, text: capitalize(el) })),
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
