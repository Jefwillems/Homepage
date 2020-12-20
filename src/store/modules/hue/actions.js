import { Hue, XYPoint, RGB } from 'hue-hacking-node';

const retrieveHueInstance = async () => {
  const key = process.env.VUE_APP_HUE_API_KEY;
  const ip = process.env.VUE_APP_HUE_BRIDGE_IP;
  return new Hue({
    key,
    ip,
    numberOfLamps: 2,
    retrieveInitialState: true,
  });
};

export default {
  async fetchState({ commit }) {
    const hue = await retrieveHueInstance();
    const states = await hue.getLampStates();

    const color = hue.colors.CIE1931ToRGB(new XYPoint(...states[0].xy), states[0].bri);
    const brightness = states[0].bri;
    commit('update_lights', { ...color, a: states[0].bri, enabled: states[0].on });
  },
  async toggleLights({ dispatch }, val) {
    const hue = await retrieveHueInstance();
    if (val) {
      await hue.turnOnAll();
    } else {
      await hue.turnOffAll();
    }
    return dispatch('fetchState');
  },
  async updateLights({ commit }, {
    r, g, b, a,
  }) {
    const hue = await retrieveHueInstance();

    await hue.setAllColors(hue.colors.rgbToCIE1931(new RGB(r, g, b)));
    await hue.setAllBrightness(a);

    commit('update_lights', {
      r, g, b, a,
    });
  },
};
