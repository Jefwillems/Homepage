<template>
  <VFlex>
    <VCard
      dark
      color="primary"
    >
      <VCardText class="px-0">
        <GmapMap
          :center="{lat:coords.lat, lng:coords.lon}"
          :zoom="7"
          map-type-id="terrain"
        />
      </VCardText>
    </VCard>
  </VFlex>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('weather', ['coords']),
  },
};
</script>
