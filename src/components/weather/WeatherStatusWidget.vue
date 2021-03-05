<template>
  <VFlex
    :xs6="xs6"
    :xs12="xs12"
  >
    <VCard
      dark
      color="primary"
    >
      <VImg
        :src="picUrl"
        position="bottom"
        max-height="225"
      />
      <VCardTitle primary-title>
        <div class="fw">
          <h3>{{ weatherCard.mainInfo }}</h3>
          <p class="my-0">
            <img
              :src="`http://openweathermap.org/img/w/${weatherCard.icon}.png`"
              alt="weather icon"
            >
          </p>
          <VContainer
            grid-list-md
            fluid
            class="py-0"
          >
            <VLayout
              row
              wrap
            >
              <VFlex xs6>
                humidity: {{ weatherCard.humidity }}%
              </VFlex>
              <VFlex
                xs6
                class="spacer"
              />
              <VFlex xs6>
                min temp: {{ weatherCard.tempMin }} °C
              </VFlex>
              <VFlex xs6>
                max temp: {{ weatherCard.tempMax }} °C
              </VFlex>
              <VFlex xs6>
                wind direction: {{ weatherCard.windDirection }}°
              </VFlex>
              <VFlex xs6>
                wind speed: {{ weatherCard.windSpeed }}
              </VFlex>
            </VLayout>
          </VContainer>
        </div>
      </VCardTitle>
      <VCardText />
    </VCard>
  </VFlex>
</template>
<script>
import { mapGetters } from 'vuex';

// ! icon url:  http://openweathermap.org/img/w/10d.png
// ! https://openweathermap.org/weather-conditions
export default {
  props: {
    xs6: { default: false, type: Boolean },
    xs12: { default: false, type: Boolean },
  },
  computed: {
    ...mapGetters('weather', ['picUrl', 'weatherCard']),
  },
};
</script>
<style lang="scss" scoped>
.infoList {
  text-align: left;
}
.fw {
  width: 100%;
}
</style>
