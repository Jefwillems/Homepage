export default {
  update_lights(state, rgba) {
    state.rgba = { ...state.rgba, ...rgba };
  },
};
