<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  .topbar {
    font-size: 0.7rem;
    background: $mainBGColor;
    position: relative;

    .logo {
      h1 {
        font-size: 1rem;
      }
    }

    .items {
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      ul {
        height: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          text-align: center;
          padding: 10px 20px;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          .icon {
            font-size: 1rem;
          }
          .text {
            font-size: 0.6rem;
          }
          &:hover {
            background: #555D7F;
          }
        }
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

      <div class="items">
        <ul>
          <li @click="addText"><i class="icon fa fa-font"></i><p class="text">文字</p></li>
          <li @click="materialLibPic({ show:true,msg:'插入图片',type:'pic' })">
            <i class="icon fa fa-image"></i><p class="text">图片</p></li>
          <li @click="materialLibPic({ show:true,msg:'插入背景',type:'bg' })">
            <i class="icon fa fa-th-large"></i><p class="text">背景</p></li>
        </ul>
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
  import { mapActions } from 'vuex';

  export default {
    computed: {
    },
    methods: {
      ...mapActions([
        'addText',
        'materialLibPic',
        'hideMaterialLibPic',
      ]),
    },
  };
</script>
