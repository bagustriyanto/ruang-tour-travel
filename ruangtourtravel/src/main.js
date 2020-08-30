import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Vuelidate from 'vuelidate';
import LoadScript from 'vue-plugin-load-script';
import config from './config.json';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(LoadScript);
Vue.prototype.$apiUrl = config.apiUrl;

Vue.mixin({
  methods: {
    showNotif: function(message, status) {
      var title, icon, type;

      switch (status) {
        case 0:
          title = 'Error';
          icon = 'fas fa-times-circle';
          type = 'danger';
          break;
        case 1:
          title = 'Success';
          icon = 'fas fa-check';
          type = 'success';
          break;
        default:
          (title = 'Info'), (icon = 'fas fa-info-circle'), (type = 'info');
      }

      const content = { message, title, icon };

      window.$.notify(content, {
        type: type,
        newest_on_top: true,
        allow_dismiss: true,
        timer: 2000,
        delay: 500,
        offset: {
          x: 30,
          y: 30
        },
        placement: {
          from: 'top',
          align: 'center'
        },
        z_index: 2000,
        animate: {
          enter: 'animated zoomIn',
          exit: 'animated zoomOut'
        },
        template:
          '<div data-notify="container" class="bootstrap-notify col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '</div>'
      });
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
