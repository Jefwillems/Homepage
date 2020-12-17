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
    hue.dimAll();
  },
  async brightenLights() {
    const hue = await retrieveHueInstance();
    hue.brightenAll();
  },
  async updateLights(store, value) {
    const hue = await retrieveHueInstance();
    if (value === 0) {
      hue.turnOffAll();
    } else {
      hue.setAllBrightness(value);
    }
  },
};
