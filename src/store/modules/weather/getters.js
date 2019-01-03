export default {
  coords: ({ coord }) => coord,
  weather: ({ weather }) => weather,
  picUrl: ({
    weather: {
      info: { id },
    },
  }) => {
    if (id > 800) {
      // clouds
      if (id > 802) {
        return './img/weather/cloudy.jpg';
      }
      return './img/weather/scat_clouds.jpg';
    }
    if (id === 800) {
      // clear
      return './img/weather/clear.jpg';
    }
    if (id > 700) {
      // atmosphere (mist)
      return './img/weather/mist.jpg';
    }
    if (id > 600) {
      // snow
      return './img/weather/snow.jpg';
    }
    if (id > 500) {
      // rain
      return './img/weather/rain.jpg';
    }
    if (id > 300) {
      // drizzle
      return './img/weather/rain.jpg';
    }
    if (id > 200) {
      // thunderstorm
      return './img/weather/thunder.jpg';
    }
    return './img/weather/clear.jpg';
  },
  weatherCard: ({
    weather: {
      humidity,
      temp,
      temp_max: tempMax,
      temp_min: tempMin,
      wind: { deg: windDirection, speed: windSpeed },
      info: { main: mainInfo, icon },
    },
  }) => ({
    humidity,
    temp,
    tempMin,
    tempMax,
    windDirection,
    windSpeed,
    mainInfo,
    icon,
  }),
};
