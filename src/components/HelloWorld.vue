<template>
  <div class="hello">
    <StravaTable />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StravaTable from "./StravaTable.vue";

@Component({
  components: {
    StravaTable
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
