import axios from 'axios';
import { actions, mutations } from '../../types';

export default {
  async [actions.FETCH_HOROSCOPE]({ commit }) {
    const { data: today } = await axios({
      url: 'https://aztro.sameerkumar.website/?sign=gemini&day=today',
      method: 'POST',
    });

    const { data: tomorrow } = await axios({
      url: 'https://aztro.sameerkumar.website/?sign=gemini&day=tomorrow',
      method: 'POST',
    });
    commit(mutations.UPDATE_CURRENT_HOROSCOPE, { today, tomorrow });
  },
};
