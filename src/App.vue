<template>
  <div>
    <NavBar :isFixed="isFixedNav"></NavBar>
    <div class="main_container" :style="{'marginTop' : mainContainerMarginTop }">
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
  },
  data() {
    return {
      isFixedNav: false,
      NAV_HEIGHT: 120,
      mainContainerMarginTop: '0'
    }
  },
  methods: {
    handleScroll() {
          // this.closeNavCollapse();
          this.last_known_scroll_position = window.scrollY;

            if (!this.ticking) {
              window.requestAnimationFrame(() => {
                // Do something with the scroll position
                if(this.last_known_scroll_position > this.NAV_HEIGHT ) {
                  this.isFixedNav = true;
                  this.mainContainerMarginTop = this.NAV_HEIGHT + 'px';
                  } else {
                    this.isFixedNav = false;
                    this.mainContainerMarginTop = '0';
                  }
                this.ticking = false;
              });

              this.ticking = true;
            }
        }
  },
   created () {
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    
  }
}
</script>

<style>
@import url(css/_global.css);

/* .main_container {
  margin-top: 120px;
} */

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
