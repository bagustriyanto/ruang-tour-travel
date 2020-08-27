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
              <h3>Login to your Account</h3>
              <form>
                <div class="form-group">
                  <label class="sr-only">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group m-b-5">
                  <label class="sr-only">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group form-inline text-left">
                  <div class="form-check">
                    <label>
                      <input type="checkbox" /><small class="m-l-10">
                        Remember me</small>
                    </label>
                  </div>
                </div>
                <div class="text-left form-group">
                  <button
                    type="button"
                    class="btn"
                    :click="login"
                  >Login</button>
                </div>
              </form>
              <p class="small">
                Don't have an account yet?
                <a href="register.html">Register New Account</a>
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

      if (!vm.$v.invalid) {
      }
    }
  }
};
</script>
