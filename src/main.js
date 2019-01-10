import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import store from './store';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
