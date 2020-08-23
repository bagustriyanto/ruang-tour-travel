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
                  <li><a href="#">Home</a></li>
                  <li class="active"><a href="#">Master Destinasi</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end: Page title -->
          <div class="row">
            <div class="col-lg-12">
              <a
                class="btn btn-sm btn-slide btn-primary btn-outline"
                data-width="100"
                href="admin_destinasi_create.html"
                style="float: right;"
              >
                <i
                  class="fa fa-plus"
                  style="color: #F8F9FA"
                ></i>
                <span>Tambah</span>
              </a>
              <Table
                id="destinasiTable"
                :config="config"
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Table from '@/components/Table.vue';

export default {
  name: 'MasterDestinasi',
  components: {
    Table
  },
  data() {
    return {
      table: null,
      config: {
        columns: [
          { title: 'Name', data: 'name' },
          { title: 'City', data: 'city' },
          { title: 'Province', data: 'province' },
          { title: 'Description', name: 'description' },
          { title: 'Thumbnail', name: 'thumbnail' },
          { title: 'Status', name: 'status' }
        ]
      }
    };
  },
  created() {
    const vm = this;
    vm.table = window.$('Table').DataTable();
  }
};
</script>