import { reactive, toRefs } from 'vue';

const state = reactive({
  error: null,
  wasm: null,
  loaded: false,
  loading: false,
});

export default function useWasm() {
  const loadWasm = async () => {
    try {
      const wasmPlaceholder = await import('strava-stats');
      setWasm(wasmPlaceholder);
    } catch (e) {
      state.error = e;
    }
  };

  /**
   * @param {any} wasmObj
   */
  const setWasm = (wasmObj) => {
    state.wasm = wasmObj;
    return;
  };

  return { ...toRefs(state), loadWasm, setWasm };
}
