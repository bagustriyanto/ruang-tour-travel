<template>
  <div>
    <table
      :id="id"
      class="table table-bordered table-hover"
      style="width:100%"
    >
    </table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: ['config', 'id', 'actionEdit', 'actionDelete'],
  created() {
    const vm = this;
    vm.$nextTick(() => {
      window.$(`#${vm.id}`).DataTable(vm.config);
    });
  }
};
</script>