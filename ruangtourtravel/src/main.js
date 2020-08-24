import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Vuelidate from 'vuelidate';
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(LoadScript);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
