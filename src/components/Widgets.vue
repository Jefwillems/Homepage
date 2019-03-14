<template>
  <VContainer
    grid-list-md
    fluid
  >
    <VLayout row>
      <VFlex xs9>
        <VLayout
          row
          wrap
          justify-center
        >
          <!-- <MapWidget /> -->
          <WeatherStatusWidget xs6 />
          <!-- <SunRiseWidget /> -->
          <!-- <WeatherAdviceWidget xs6 /> -->
        </VLayout>
      </VFlex>

      <VFlex xs3>
        <Horoscopes />
      </VFlex>
    </VLayout>
  </VContainer>
</template>
<script>
import { mapState } from 'vuex';
import WeatherWidgetComponents from './weather';
import Horoscopes from './horoscope/Horoscopes.vue';
import { actions } from '../store/types';

export default {
  name: 'Widgets',
  components: {
    ...WeatherWidgetComponents,
    Horoscopes,
  },
  computed: {
    ...mapState('weather', ['location']),
  },
  created() {
    this.$store.dispatch(`weather/${actions.FETCH_WEATHER_DATA}`, this.location);
  },
};
</script>
<style lang="scss" scoped>
</style>
