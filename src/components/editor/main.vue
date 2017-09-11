<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  .main {
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
      background: olivedrab;
      height: calc(100% - 60px);

      .m-page-list {
        width: 240px;
        height: 100%;
      }

      .m-stage {
        position: absolute;
        left: 240px;
        top: $topbarHeight;
      }

      .m-attr-list {
        width: calc(100% - 240px - 960px);
        height: 100%;
      }
    }
  }
</style>

<template>
  <div class="main clear-fix">
    <topbar class="m-topbar"></topbar>
    <div class="content">
      <page-list class="m-page-list fl"></page-list>
      <stage class="m-stage"></stage>
      <attr-list class="m-attr-list fr"></attr-list>
    </div>
  </div>
</template>

<script>
  import Topbar from './topbar';
  import PageList from './page-list';
  import Stage from './stage';
  import AttrList from './attr-list';

  export default {
    components: {
      Topbar,
      PageList,
      Stage,
      AttrList,
    },
  };
</script>
