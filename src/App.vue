<template>
  <div id="app">
    <NavBar />
    <b-button type="is-primary" v-on:click="slamWasm()">Load WebAssembly</b-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

@Component({
  components: {
    HelloWorld,
    NavBar
  },
  async created() {
    // load WebAssembly library into global state
    const wasm = await import("strava-stats-wasm");
    this.$store.commit({ type: "loadWasm", wasm: wasm });
  },
  methods: {
    slamWasm(): void {
      const retrievedWasm = this.$store.getters.getWasm;
      retrievedWasm.greet();
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
