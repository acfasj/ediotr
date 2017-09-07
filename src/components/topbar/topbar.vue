<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/_variables";

  .topbar {
    font-size: 0.7rem;
    background: $mainBGColor;
    position: relative;
    .logo {
      h1 {
        font-size: 1rem;
      }
    }
    .buttons {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 1rem;
    }
  }
</style>

<template>
  <div class="topbar">
    <nav class="clear-fix">
      <div class="logo fl">
        <h1 class="vertical-middle">logo</h1>
      </div>
      <div class="buttons">
        <button type="button">保存</button>
        <button type="button">预览</button>
        <button type="button">设置</button>
        <button type="button">退出</button>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {};
</script>
