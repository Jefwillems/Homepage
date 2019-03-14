import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    horoscope: {
      today: {
        color: '',
        compatibility: '',
        current_date: '',
        date_range: '',
        description: '',
        lucky_number: '',
        lucky_time: '',
        mood: '',
      },
      tomorrow: {
        color: '',
        compatibility: '',
        current_date: '',
        date_range: '',
        description: '',
        lucky_number: '',
        lucky_time: '',
        mood: '',
      },
    },
  },
  getters,
  actions,
  mutations,
};
