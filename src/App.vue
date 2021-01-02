<template>
  <div>
    <NavBar/>
    <div class="main_container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>
import NavBar from './components/TheNavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url(css/_global.css);

.main_container {
  margin-top: 120px;
  /* padding: 1rem; */
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
