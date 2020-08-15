<template>
  <b-navbar>
    <template slot="brand">
      <h1 class="page-title">PTCG Stats</h1>
      <!-- <b-navbar-item>
        <h1>PTCG Stats</h1>
      </b-navbar-item> -->
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
