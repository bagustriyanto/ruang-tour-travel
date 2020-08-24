<template>
  <div>
    <section id="page-content">
      <div class="container">
        <!-- post content -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">
                  {{ $route.params.type === 'create' ? 'Tambah' : 'Ubah' }}
                  Master Destinasi
                </h5>
                <h6 class="card-subtitle text-muted">
                  <div class="breadcrumb float-left">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Master Destinasi</a></li>
                      <li class="active">
                        <a href="#">{{
                          $route.params.type === 'create' ? 'Tambah' : 'Ubah'
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </h6>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-form-label col-sm-2 text-sm-right"
                      >Nama</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nama"
                        :class="{
                          'is-invalid': !$v.form.name.required && change
                        }"
                        v-model.trim="$v.form.name.$model"
                        v-on:blur="change = true"
                      />
                    </div>
                    <div class="col-form-label col-sm-2 text-sm-right"></div>
                    <div
                      class="col-sm-10 is-invalid"
                      v-if="!$v.form.name.required && change"
                    >
                      Nama wajib diisi.
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-sm-2 text-sm-right"
                      >Provinsi</label
                    >
                    <div class="col-sm-10">
                      <select
                        class="form-control"
                        :class="{
                          'is-invalid': !$v.form.province.required && change
                        }"
                        v-model="$v.form.province.$model"
                        :change="provinsiOnChange($v.form.province.$model)"
                      >
                        <option value="">-- Pilih Provinsi --</option>
                        <option
                          v-for="(item, index) in provinceList"
                          :key="index"
                          :value="item.id"
                          >{{ item.nama }}</option
                        >
                      </select>
                    </div>
                    <div class="col-form-label col-sm-2 text-sm-right"></div>
                    <div
                      class="col-sm-10 is-invalid"
                      v-if="!$v.form.province.required && change"
                    >
                      Provinsi wajib dipilih.
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-sm-2 text-sm-right"
                      >Kota/Kabupaten</label
                    >
                    <div class="col-sm-10">
                      <select
                        class="form-control"
                        :class="{
                          'is-invalid': !$v.form.city.required && change
                        }"
                        v-model="$v.form.city.$model"
                      >
                        <option value="">-- Pilih Kota/Kabupaten --</option>
                        <option
                          v-for="(item, index) in cityList"
                          :key="index"
                          :value="item.id"
                          >{{ item.nama }}</option
                        >
                      </select>
                      <div
                        class="col-sm-10 is-invalid"
                        v-if="!$v.form.city.required && change"
                      >
                        Kota/Kabupaten wajib dipilih.
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-sm-2 text-sm-right"
                      >Deskripsi</label
                    >
                    <div class="col-sm-10">
                      <Summernote id="summernote" :type="0"></Summernote>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-form-label col-sm-2 text-sm-right"
                      for="status"
                      >Status</label
                    >
                    <div class="col-sm-10">
                      <select
                        class="form-control"
                        :class="{
                          'is-invalid': !$v.form.city.required && change
                        }"
                        name="status"
                      >
                        <option value="">-- Pilih Status --</option>
                        <option value="0">Non Aktif</option>
                        <option value="1">Aktif</option>
                      </select>
                    </div>
                    <div class="col-sm-2"></div>
                    <div
                      class="col-sm-10 is-invalid"
                      v-if="!$v.form.status.required && change"
                    >
                      Status wajib dipilih.
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10 ml-sm-auto">
                      <button
                        type="button"
                        class="btn btn-primary"
                        v-on:click="submit()"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import Summernote from '@/components/Summernote.vue';
import axios from 'axios';

export default {
  name: 'MasterDestinasiForm',
  components: {
    Summernote
  },
  beforeRouteEnter(to, from, next) {
    /* eslint-disable */
    if (to.params.type !== 'create' && to.params.type !== 'edit') {
      next({
        path: '/home'
      });
    } else {
      next();
    }
  },
  data() {
    return {
      change: false,
      form: {
        name: '',
        city: '',
        province: '',
        description: '',
        thumbnail: '',
        status: ''
      },
      cityList: [],
      provinceList: []
    };
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      province: { required },
      city: { required },
      status: required
    }
  },
  mounted() {
    const vm = this;
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then(result => {
        vm.provinceList = result.data.provinsi;
      });
  },
  methods: {
    provinsiOnChange(provinceId) {
      const vm = this;
      axios
        .get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`
        )
        .then(result => {
          vm.cityList = result.data.kota_kabupaten;
        });
    },
    submit() {
      const vm = this;
      vm.change = true;
      vm.$v.$touch();
    }
  }
};
</script>
