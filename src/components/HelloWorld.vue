<template>
  <div class="hello">
    <StravaTable />
    <b-button type="is-primary" v-on:click="slamWasm()">Load WebAssembly</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StravaTable from "./StravaTable.vue";

@Component({
  components: {
    StravaTable
  },
  methods: {
    slamWasm(): void {
      const retrievedWasm = this.$store.getters.getWasm;
      retrievedWasm.greet();
    }
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
@import "../assets/styles/main";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
}
</style>
