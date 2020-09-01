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
                    <label class="col-form-label col-sm-2 text-sm-right">Nama</label>
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
                    <label class="col-form-label col-sm-2 text-sm-right">Provinsi</label>
                    <div class="col-sm-10">
                      <select
                        class="form-control"
                        :class="{
                          'is-invalid': !$v.form.province.required && change
                        }"
                        v-model="$v.form.province.$model"
                        v-on:change="provinsiOnChange"
                      >
                        <option value="">-- Pilih Provinsi --</option>
                        <option
                          v-for="(item, index) in provinceList"
                          :key="index"
                          :value="item.nama"
                        >{{ item.nama }}</option>
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
                    <label class="col-form-label col-sm-2 text-sm-right">Kota/Kabupaten</label>
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
                          :value="item.nama"
                        >{{ item.nama }}</option>
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
                    <label class="col-form-label col-sm-2 text-sm-right">Deskripsi</label>
                    <div class="col-sm-10">
                      <Summernote
                        id="summernote"
                        :type="0"
                        v-model="form.description"
                      ></Summernote>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-form-label col-sm-2 text-sm-right"
                      for="status"
                    >Status</label>
                    <div class="col-sm-10">
                      <select
                        class="form-control"
                        :class="{
                          'is-invalid': !$v.form.city.required && change
                        }"
                        name="status"
                        v-model="$v.form.status.$model"
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
                  <!--File upload 3-->
                  <div class="form-group row">
                    <label
                      for="telephone"
                      class="col-form-label col-sm-2 text-sm-right"
                    >Thumbnail</label>
                    <div class="col-sm-10">
                      <a class="dropzone-attach-files btn btn-sm mb-0">Browse</a>
                      <div
                        class="d-none dropzone"
                        id="thumbnail"
                        action="/file-upload"
                      >
                        <div class="fallback">
                          <input
                            name="file"
                            type="file"
                          />
                        </div>
                      </div>
                      <!-- Preview -->
                      <div
                        class="mt-3 col-sm-6"
                        id="formFiles"
                      ></div>
                      <!-- File preview template -->
                      <div
                        class="d-none"
                        id="formTemplate"
                      >
                        <div class="card mb-3">
                          <div class="p-2">
                            <div class="row align-items-start">
                              <div class="col-auto">
                                <img
                                  data-dz-thumbnail
                                  src="#"
                                  class="avatar border rounded"
                                >
                              </div>
                              <div class="col pl-0">
                                <a
                                  href="#"
                                  class="text-muted font-weight-bold"
                                  data-dz-name
                                ></a>
                                <p class="mb-0"><small data-dz-size></small> <small
                                    class="d-block text-danger"
                                    data-dz-errormessage
                                  ></small></p>
                              </div>
                              <div class="col-auto pt-2">
                                <a
                                  class="btn-lg text-danger"
                                  href="#"
                                  data-dz-remove
                                ><i class="icon-trash-2"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end: File preview template -->
                    </div>
                  </div>
                  <!--end: File upload 3-->
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
<style scoped>
#formFiles3 {
  padding-left: 0;
}
</style>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import Summernote from '@/components/Summernote.vue';
import axios from 'axios';

window.Dropzone.autoDiscover = false;

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
      status: { required }
    }
  },
  mounted() {
    const vm = this;
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then(result => {
        vm.provinceList = result.data.provinsi;
      });

    const thumbnail = window.$('#thumbnail');
    thumbnail.dropzone({
      autoQueue: false,
      maxFilesize: 1,
      acceptedFiles: 'image/*',
      previewsContainer: '#formFiles',
      previewTemplate: $('#formTemplate').html(),
      clickable: '.dropzone-attach-files',
      init: function() {
        this.on('addedfile', function(file) {
          const reader = new FileReader();
          reader.onloadend = function() {
            vm.form.thumbnail = reader.result;
          };
          reader.readAsDataURL(file);
        });
      }
    });
  },
  methods: {
    provinsiOnChange() {
      const vm = this;
      const filterProvince = vm.provinceList.filter(function(item) {
        return item.nama === vm.form.province;
      });
      axios
        .get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${filterProvince[0].id}`
        )
        .then(result => {
          vm.cityList = result.data.kota_kabupaten;
        });
    },
    submit() {
      const vm = this;
      vm.change = true;
      vm.$v.$touch();

      if (!vm.$v.invalid) {
        axios
          .post(`${vm.$apiUrl}/api/destination`, vm.form)
          .then(({ data }) => {
            const { message, status } = data;
            vm.showNotif(message, status ? 1 : 0);
            vm.reset();
          })
          .catch(err => {
            vm.showNotif(err.message, 0);
          });
      }
    },
    reset() {
      const vm = this;
      vm.change = false;
      vm.form = {
        name: '',
        city: '',
        province: '',
        description: '',
        thumbnail: '',
        status: ''
      };
    }
  }
};
</script>
