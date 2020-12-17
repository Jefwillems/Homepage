import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import localforage from 'localforage';
import weather from './modules/weather';
import bookmarks from './modules/bookmarks';
import horoscope from './modules/horoscope';
import huemodule from './modules/hue';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    weather,
    bookmarks,
    horoscope,
    huemodule,
  },
  strict: debug,
  actions: {
    async initialiseStore(state) {
      if (await localforage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(await localforage.getItem('store'))));
      }
    },
  },
  plugins: debug ? [createLogger()] : [],
});

store.subscribe((mutation, state) => {
  localforage.setItem('store', JSON.stringify(state));
});

export default store;
