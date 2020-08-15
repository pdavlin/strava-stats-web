<template>
  <b-navbar>
    <template slot="brand">
      <h1 class="page-title">PTCG Stats</h1>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NavBar extends Vue {}
</script>
<style lang="scss" scoped>
.page-title {
  padding: 12px 8px;
}
</style>
