<template>
  <b-navbar>
    <template slot='brand'>
      <b-navbar-item tag='router-link'>
        <h1>PTCG Stats</h1>
      </b-navbar-item>
    </template>

    <template slot='end'>
      <b-navbar-item tag='div'>
        <div class='buttons'>
          <a class='button is-primary'>
            <strong>Sign up</strong>
          </a>
          <a class='button is-light'>Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue {}
</script>