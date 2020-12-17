<template>
  <VContainer
    grid-list-md
    fluid
  >
    <VLayout row>
      <VFlex xs3>
        <Light />
      </VFlex>
      <VFlex xs5>
        <VLayout
          row
          wrap
          justify-center
        >
          <!-- <MapWidget /> -->
          <WeatherStatusWidget />
          <!-- <,
    LightSunRiseWidget /> -->
          <!-- <WeatherAdviceWidget xs6 /> -->
        </VLayout>
      </VFlex>

      <VFlex xs4>
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
import Light from './hue/Light.vue';

export default {
  name: 'Widgets',
  components: {
    ...WeatherWidgetComponents,
    Horoscopes,
    Light,
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
