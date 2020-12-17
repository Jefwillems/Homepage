import { Hue } from 'hue-hacking-node';

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
  async dimLights() {
    const hue = await retrieveHueInstance();
    return hue.dimAll();
  },
  async brightenLights() {
    const hue = await retrieveHueInstance();
    return hue.brightenAll();
  },
  async updateLights(store, value) {
    const hue = await retrieveHueInstance();

    return hue.setAllBrightness(value);
  },
  async fetchState({ commit }) {
    const hue = await retrieveHueInstance();

    return commit('update_lights_state', await hue.getLampStates());
  },
  async toggleLights({ commit }, val) {
    const hue = await retrieveHueInstance();
    if (val) {
      await hue.turnOnAll();
    } else {
      await hue.turnOffAll();
    }
    return commit('update_lights_state', await hue.getLampStates());
  },
};
