<template>
  <div>
    <Header />
    <!-- AUTHOR NAME -->
    <div>
      <router-view></router-view>
    </div>
    <!-- end: AUTHOR NAME -->
    <Footer />
    <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>
  </div>
</template>
<script>
import Vue from 'vue';
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Main',
  components: {
    Header,
    Footer
  },
  beforeCreate() {
    setTimeout(() => {
      Vue.loadScript('../js/functions.js');
    }, 500);
  }
};
</script>
