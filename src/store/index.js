import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import weather from './modules/weather';
import bookmarks from './modules/bookmarks';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    weather,
    bookmarks,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
