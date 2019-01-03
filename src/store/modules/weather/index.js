import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    coord: {
      lat: 0,
      lon: 0,
    },
    weather: {
      info: { id: 800, icon: '04d' },
      wind: { deg: 0, speed: 0 },
    },
    sunrise: 0,
    sunset: 0,
    location: 'Gent, BE',
  },
  getters,
  actions,
  mutations,
};
