<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  #main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 0.7rem;

    .m-topbar {
      height: $topbarHeight;
    }

    .content {
      background: #efefef url("../../assets/images/canvas_bg.jpg") repeat ;
      height: calc(100% - 60px);

      .m-page-list {
        width: 240px;
        height: 100%;
      }

      .m-stage {
        position: absolute;
        left: 260px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: 0 1px 1px rgba(0,0,0,0.15);
      }

      .m-attr-list {
        width: calc(100% - 280px - 960px);
        height: 100%;
      }
    }
  }
</style>

<template>
  <div id="main" class="clear-fix">
    <topbar class="m-topbar"></topbar>
    <div class="content">
      <page-list class="m-page-list fl"></page-list>
      <stage class="m-stage"></stage>
      <attr-list class="m-attr-list fr"></attr-list>
    </div>
    <material-lib-pic></material-lib-pic>
  </div>
</template>

<script>
//  import $ from 'jquery';
//  import store from '../../store';
  import Topbar from './topbar';
  import PageList from './page-list';
  import Stage from './stage';
  import AttrList from './attr-list';
  import MaterialLibPic from './material-lib-pic';

  export default {
    created() {
//      $(document).on('click', (event) => {
//        const obj = $(event.target);
//        console.log(obj);
//        console.log(obj.parents('#attr-list'));
//        if (obj.parents('#stage').length === 0 &&
//            obj.parents('#attr-list').length !== 0) {
//          store.dispatch({
//            type: 'clearCheckedItems',
//          });
//        }
//      });
    },
    components: {
      Topbar,
      PageList,
      Stage,
      AttrList,
      MaterialLibPic,
    },
  };
</script>
