<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  .page-list {
    position: relative;
    background: #fff;

    .title {
      height: 50px;
      background: $activeColor;
      text-align: center;
      padding: 14px;
      span {
        line-height: 22px;
      }
    }

    .pages {
      height: calc(100% - 100px);
      overflow-y: auto;
      position: relative;

      li {
        cursor: pointer;
        background: lightgray;
        text-align: center;
        padding: 10px;
        border-radius: 4px;
        position: relative;
        .fa-close {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      li.active {
        background: $activeColor;
        color: #fff;
      }
      & li:nth-of-type(n+1) {
        margin-bottom: 20px;
      }
    }

    .new-page {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 50px;
      padding: 14px;
      text-align: center;
      background: $mainBGColor;
    }
  }
</style>

<template>
  <div class="page-list">
    <div class="title filled-x-box"><span>页面列表</span></div>
    <ul class="pages">
      <li v-for="(item, index) in pagesData"
          @click="selectPage(index)"
          :class="{active: currentPage == index + 1}">
        第{{ index + 1 }}页
        <!-- stop propagation to prevent trigger `selectPage` -->
        <i class="fa fa-close"
           v-show="currentPage == index + 1"
           @click.stop="deletePage(index)"></i></li>
    </ul>
    <div class="new-page filled-x-box">
      <button type="button" @click="addPage">增加页面</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'currentPageData',
        'pagesData',
        'currentPage',
      ]),
    },
    methods: {
      ...mapActions([
        'selectPage',
        'addPage',
        'deletePage',
      ]),
    },
    created() {
      this.addPage();
    },
  };
</script>
