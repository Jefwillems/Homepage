import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    hue: null,
    lightsState: [{ on: false }],
  },
  getters,
  actions,
  mutations,
};
