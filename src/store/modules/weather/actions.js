import axios from 'axios';
import localforage from 'localforage';
import { mutations, actions } from '../../types';

export default {
  async [actions.FETCH_WEATHER_DATA]({ commit }, location) {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const { data } = await axios({
      url,
      method: 'GET',
      params: {
        q: encodeURI(location),
        appid: '9a2767a512ebd741a56193bdd134794e',
        units: 'metric',
      },
    });
    commit(mutations.UPDATE_WEATHER_DATA, data);
  },
  async [actions.PERSIST_LOCATION]({ commit }, location) {
    let currentSettings = await localforage.getItem('settings');
    if (currentSettings === null) {
      currentSettings = {};
    }
    currentSettings.location = location;
    localforage.setItem('settings', currentSettings);
    commit(mutations.UPDATE_LOCATION, location);
  },
};
