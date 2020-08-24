<template>
  <div>
    <textarea :id="id" :value="value"></textarea>
  </div>
</template>
<script>
import axios from 'axios';
import constant from '../assets/js/constants.js';

export default {
  name: 'Summernote',
  props: ['id', 'value', 'type'],
  created() {
    let vm = this;
    vm.$nextTick(() => {
      window.$(`#${vm.id}`).summernote({
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough', 'superscript', 'subscript']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ],
        height: 300, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        dialogsInBody: true,
        callbacks: {
          onChange: function(contents) {
            vm.$emit('input', contents);
          },
          onImageUpload: function(file) {
            vm.uploadImage(file[0], constant.fileType.image);
          },
          onMediaDelete: function(target) {
            vm.removeImage(target[0].src);
          }
        }
      });
      if (vm.type === constant.form_view) {
        window.$(`#${vm.id}`).summernote('disable');
      }
    });
  },
  methods: {
    uploadImage: function(file, fileType) {
      let vm = this;
      let formData = new FormData();
      formData.append('file', file);
      formData.append('type', fileType);

      axios.post('/shared/uploadFile', formData).then(({ data }) => {
        window
          .$(`#${vm.id}`)
          .summernote('insertImage', `${constant.apiEndPoint}${data.data}`);
      });
    },
    removeImage: function(sourceFile) {
      let splitSourceFile = sourceFile.split('/');
      let fileName = splitSourceFile[splitSourceFile.length - 1];
      axios
        .delete('/shared/deleteFile', { fileName: fileName, type: 1 })
        .then(() => {});
    }
  }
};
</script>
