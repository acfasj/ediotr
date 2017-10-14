<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .material-lib-pic-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #material-lib-pic {
    width: 750px;
    height: 450px;
    padding: 10px;
    border-radius: 8px;
    overflow-y: auto;
    background-color: #fff;
    @include border-1px;
    @include box-shadow-bottom-4px;
    .upload-img {
      padding: 6px 0 14px 0;
      font-size: 0.7rem;
      text-align: center;
      @include border-bottom-1px;
      .upload-btn {
        border-radius: 2px;
        padding: 6px 10px;
        background: #0fcebd;
        color: #fff;
      }
      .upload-btn:hover {
        background-color: #0ebfb0;
      }
      #upload {
        display: none;
      }
      i {
        cursor: pointer;
      }
    }

    .images {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-top: 10px;
      .img-item {
        padding: 4px;
        cursor: pointer;
        img {
          height: 100px;
        }
      }
    }
  }
</style>

<template>
  <div class="material-lib-pic-wrapper" v-show="materialLibPicObj.show">
    <div id="material-lib-pic">
      <div class="upload-img">
        <label for="upload" class="upload-btn">上传图片</label>
        <input type="file" multiple name="userfile[]" id="upload" @change="filesChange($event)">
        <i @click="hideMaterialLibPic" class="fa fa-close fr"></i>
      </div>

      <div class="images">
        <div v-for="item in imgList" @click="addPic({ src: item,  type: materialLibPicObj.type})" class="img-item">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import $ from 'jquery';
  import APP_URL from '@/app-url';

  export default {
    data() {
      return {
        imgList: [
          'static/images/mountain.jpg',
          'static/images/tiger.jpg',
          'static/images/cloth1.jpg',
          'static/images/cloth2.jpg',
          'static/images/cloth3.jpg',
        ],
      };
    },
    computed: {
      ...mapGetters([
        'materialLibPicObj',
      ]),
    },
    methods: {
      ...mapActions([
        'hideMaterialLibPic',
        'addPic',
      ]),
      filesChange(e) {
        const vm = this;
        const formData = new FormData();
        const files = Array.from(e.target.files);
        files.forEach((f, i) => {
          formData.append(`userfile[${i}]`, f);
        });

        $.ajax({
          url: `${APP_URL}/admin/upload.php`,
          type: 'POST',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
        }).done((res) => {
          let uploadArr = res.data.pictureSrc;
          uploadArr = uploadArr.map(url => `${APP_URL}/${url}`);
          vm.imgList = vm.imgList.concat(uploadArr);
        }).fail();
      },

    },
  };
</script>
