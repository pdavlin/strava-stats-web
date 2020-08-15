import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wasm: null as any,
    wasmLoaded: false,
  },
  mutations: {
    async loadWasm(state) {
      if (!state.wasmLoaded) {
        const wasmPlaceholder = await import('strava-stats-wasm');
        state.wasm = wasmPlaceholder;
        state.wasmLoaded = true;
      }
    },
  },
  getters: {
    getWasm: (state) => state.wasm,
  },
  actions: {},
  modules: {},
});
