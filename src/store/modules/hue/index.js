import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    hue: null,
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1,
      enabled: false,
    },
  },
  getters,
  actions,
  mutations,
};
