import { mutations } from '../../types';

export default {
  [mutations.UPDATE_WEATHER_DATA](
    state,
    {
      coord,
      weather,
      main,
      visibility,
      wind,
      clouds,
      sys: { country, sunrise, sunset },
      name,
    },
  ) {
    state.coord = {
      ...coord,
      name: `${name}, ${country}`,
    };
    state.weather = {
      info: weather[0],
      ...main,
      visibility,
      wind,
      clouds,
    };
    state.sunrise = sunrise;
    state.sunset = sunset;
  },
  [mutations.UPDATE_LOCATION](state, location) {
    state.location = location;
  },
};
