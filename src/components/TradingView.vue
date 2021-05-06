<template>
  <v-flex>
    <div class="tradingview-widget-container">
      <div id="tradingview_aaa6c" />
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/ADAEUR/?exchange=BINANCE"
          rel="noopener"
          target="_blank"
        ><span class="blue-text">ADAEUR Chart</span></a> by TradingView
      </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'TradingView',
  mounted() {
    // eslint-disable-next-line no-undef, no-new, new-cap
    new TradingView.widget({
      width: 685,
      height: '400px',
      symbol: 'KRAKEN:ETHEUR',
      interval: 'D',
      timezone: 'Europe/Brussels',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      withdateranges: true,
      allow_symbol_change: true,
      container_id: 'tradingview_aaa6c',
    });
  },
};
</script>
<style scoped>
</style>
