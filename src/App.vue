<template>
  <div id="app">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png" />
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
  async mounted() {
    await this.$store.commit("loadWasm");
    const wasm = await this.$store.getters.getWasm;
    wasm.greet();
  }
})
export default class App extends Vue {}
</script>

<style lang='scss'>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
