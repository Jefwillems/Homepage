<template>
  <VContainer
    grid-list-md
    fluid
  >
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
  </VContainer>
</template>
<script>
import { mapState } from 'vuex';
import WeatherWidgetComponents from './weather';
import { actions } from '../store/types';

export default {
  components: {
    ...WeatherWidgetComponents,
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
