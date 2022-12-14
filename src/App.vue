<template>
  <div id="app">
    <PrimaryNav/>
    <div class="container">
      <div class="notification is-primary">
        You have stumbled upon a WIP portfolio.
      </div>
    </div>
    <section class="section">
      <h1 class="title">Hi! I'm Jeff.</h1>
      <h6 class="subtitle is-6">I am a full stack developer.... etc.</h6>
    </section>
  </div>
</template>

<script>
import PrimaryNav from './components/PrimaryNav.vue'

export default {
  name: 'App',
  components: {PrimaryNav}
}
</script>

<style>
  @import "~bulma/css/bulma.css";
</style>
