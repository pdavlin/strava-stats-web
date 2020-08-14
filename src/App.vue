<template>
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
</template>

<script>
import { ref } from "vue";
import useWasm from "./store/wasmConnector";
export default {
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
  async mounted() {
    const { wasm, loadWasm, error } = useWasm();
    await loadWasm();
    console.log(wasm.value);
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
