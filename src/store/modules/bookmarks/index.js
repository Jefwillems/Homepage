import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    categories: [],
    selected_category: 'Any',
    bookmarks: [],
  },
  getters,
  actions,
  mutations,
};
