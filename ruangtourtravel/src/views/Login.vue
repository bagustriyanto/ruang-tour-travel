<template>
  <div id="login">
    <section class="fullscreen">
      <div class="container">
        <div>
          <div
            class="text-center m-b-30"
            id="logo"
          >
            <router-link to="/home">
              <span style="font-size: 40px; color: #1f1f1f; font-family: Poppins, sans-serif; font-weight: 800;"><span style="color: red;">R</span>UANG LIBURAN</span>
            </router-link>
          </div>
          <div class="row">
            <div class="col-lg-5 center p-50 background-white b-r-6">
              <h3>Masuk ke akun kamu</h3>
              <form>
                <div class="form-group">
                  <label class="sr-only">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{'is-invalid': !$v.username.required && change}"
                    placeholder="Username"
                    v-model="$v.username.$model"
                  />
                </div>
                <div class="form-group m-b-5">
                  <label class="sr-only">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{'is-invalid': !$v.password.required && change}"
                    placeholder="Password"
                    v-model="$v.password.$model"
                  />
                </div>
                <div class="form-group form-inline text-left">
                  <div class="form-check">
                    <label>
                      <input type="checkbox" /><small class="m-l-10">
                        Ingatkan saya</small>
                    </label>
                  </div>
                </div>
                <div class="text-left form-group">
                  <button
                    type="button"
                    class="btn"
                    v-on:click="login()"
                  >Login</button>
                </div>
              </form>
              <p class="small">
                Belum punya akun?
                <router-link to="/registrasi">Buat akun baru</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
#login section {
  background-color: #f8f9fa;
}
</style>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      change: false
    };
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(8) }
  },
  methods: {
    login() {
      const vm = this;
      vm.change = true;
      vm.$v.$touch();

      if (!vm.$v.$error) {
        axios
          .post(`${vm.$apiUrl}/api/login`, {
            username: vm.username,
            password: vm.password
          })
          .then(({ data }) => {
            const { status, message, token, data: user } = data;
            if (status) {
              vm.showNotif(message, 1);
              localStorage.setItem('token', token);
              localStorage.setItem('isLogin', true);
              localStorage.setItem('is_admin', user.is_admin);
              setTimeout(() => {
                vm.$router.push('home');
              }, 1000);
            } else {
              vm.showNotif(message, 0);
            }
          })
          .catch(err => {
            vm.showNotif(err.message, 0);
          });
      }
    }
  }
};
</script>
