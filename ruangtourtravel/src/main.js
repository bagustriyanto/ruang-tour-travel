import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false;

Vue.use(LoadScript);
Vue.loadScript('../js/plugins.js');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
