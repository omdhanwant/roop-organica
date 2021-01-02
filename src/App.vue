<template>
  <div>
    <NavBar/>
    <section class="main_container">
      <Home/>
    </section>
  </div>
</template>

<script>
import NavBar from './components/TheNavBar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>

<style>
@import url(css/_global.css);

.main_container {
  margin-top: 120px;
  /* padding: 1rem; */
}

</style>
