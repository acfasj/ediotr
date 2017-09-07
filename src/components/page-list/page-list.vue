<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  .page-list {
    position: relative;
    background: #fff;
    .title {
      background: $activeColor;
      text-align: center;
      padding: 0.7rem;
    }
    .new-page {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0.7rem;
      text-align: center;
      background: $mainBGColor;
    }
  }
</style>

<template>
  <div class="page-list">
    <div class="title">页面列表</div>
    <ul>
      <li>第一页</li>
    </ul>
    <div class="new-page filled-x-box">
      <button type="button">增加页面</button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>
