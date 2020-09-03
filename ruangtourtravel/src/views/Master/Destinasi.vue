<template>
  <div>
    <section id="page-content">
      <div class="container">
        <div class="content">
          <!-- post content -->
          <!-- Page title -->
          <div class="row">
            <div class="page-title">
              <h2>Master Destinasi</h2>
              <div class="breadcrumb float-left">
                <ul>
                  <li>
                    <router-link to="/home">Beranda</router-link>
                  </li>
                  <li class="active">
                    <a href="#">Master Destinasi</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end: Page title -->
          <div class="row">
            <transition
              name="bounce"
              enter-active-class="bounceInLeft"
              leave-active-class="bounceOutRight"
            >
              <div
                class="col-lg-12"
                v-if="filterShow"
              >
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="search_name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="search.name"
                        id="search_name"
                      >
                    </div>
                    <div class="form-group col-md-3">
                      <label for="search_province">Province</label>
                      <select
                        class="form-control"
                        id="search_province"
                      >
                        <option value="">-- Pilih Provinsi --</option>
                        <option
                          v-for="(item, index) in provinceList"
                          :key="index"
                          :value="item.nama"
                        >{{ item.nama }}</option>
                      </select>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="search_city">City</label>
                      <select
                        class="form-control"
                        id="search_city"
                      ></select>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="search_status">Status</label>
                      <select
                        class="form-control"
                        id="search_status"
                      >
                        <option value="">Semua</option>
                        <option value="0">Non Aktif</option>
                        <option value="1">Aktif</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </transition>

            <div class="col-lg-12">
              <div style="display: inline">
                <button
                  href="#"
                  style="margin-left: 10px;"
                  class="btn btn-sm btn-slide btn-primary btn-outline"
                  v-on:click="showFilter()"
                ><i
                    class="icon-filter"
                    style="color: #F8F9FA"
                  ></i>
                  <span>Filter</span></button>
                <button
                  class="btn btn-sm btn-slide btn-primary btn-outline"
                  data-width="100"
                  v-on:click="addDestinasi()"
                >
                  <i
                    class="icon-plus"
                    style="color: #F8F9FA"
                  ></i>
                  <span>Tambah</span>
                </button>
              </div>
              <table
                id="destinasiTable"
                class="table table-bordered table-hover"
                style="width:100%"
              >
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'MasterDestinasi',
  data () {
    return {
      table: null,
      config: {},
      filterShow: false,
      provinceList: [],
      cityList: [],
      search: {
        name: '',
        province: '',
        city: '',
        status: ''
      }
    };
  },
  created () {
    const vm = this;
    vm.config = {
      searching: false,
      serverSide: true,
      ajax: {
        method: 'get',
        url: `${vm.$apiUrl}/api/destination`,
        cache: true,
        data: function (param) {
          for (const [key, value] of Object.entries(vm.search)) {
            param[key] = value;
          }
        }
      },
      columns: [
        { title: 'Name', data: 'name' },
        { title: 'Province', data: 'province' },
        { title: 'City', data: 'city' },
        { title: 'Description', data: 'description' },
        { title: 'Thumbnail', data: 'thumbnail' },
        {
          title: 'Status', data: 'status', render: function (data) {
            if (data) {
              return '<span class="badge badge-pill badge-primary">Aktif</span>'
            } else {
              return '<span class="badge badge-pill badge-danger">Non Aktif</span>'
            }
          }
        },
        {
          title: 'Action', data: 'id',
          render: function (data) {
            return `<a class="ml-2" href="/master/destinasi/edit/${data}" data-toggle="tooltip" data-original-title="Edit"><i class="icon-edit"></i></a>
                  <a class="ml-2" href="#" data-toggle="tooltip" data-original-title="Delete"><i class="icon-trash-2"></i></a>`
          }
        }
      ],
      drawCallback: function () {
        window.$('#destinasiTable_length').hide();
      }
    }
    vm.$nextTick(() => {
      vm.table = window.$('#destinasiTable').DataTable(vm.config);
      vm.table.on('click', '.icon-trash-2', function () {
        const data = vm.table.row(window.$(this).closest('tr')).data();
        vm.delete(data.id)
      })
    });
  },
  mounted () {
    const vm = this;
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then(result => {
        vm.provinceList = result.data.provinsi;
      });
  },
  methods: {
    showFilter () {
      const vm = this
      vm.filterShow = !vm.filterShow;
    },
    addDestinasi () {
      const vm = this
      vm.$router.push('/master/destinasi/create');
    },
    delete (id) {
      const vm = this
      axios.delete(`${vm.$apiUrl}/api/destination/${id}`).then(({ data }) => {
        const { status, message } = data

        vm.showNotif(message, status ? 1 : 0);
      })
    }
  },
};
</script>
