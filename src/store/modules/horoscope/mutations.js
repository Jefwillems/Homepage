import { mutations } from '../../types';

export default {
  [mutations.UPDATE_CURRENT_HOROSCOPE](state, data) {
    state.horoscope = { ...data };
  },
  [mutations.UPDATE_SIGN](state, sign) {
    state.sign = sign;
  },
};
