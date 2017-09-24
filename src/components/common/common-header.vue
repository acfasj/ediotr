<style rel="stylesheet/scss" lang="scss" scoped>

  .header {
    padding-top: 30px;
    .nav-bar {
      display: flex;
      justify-content: space-between;

      li {
        padding: 14px 20px;
        cursor: pointer;
        border-radius: 20px;
        &:hover {
          background: rgba(89, 152, 203, 0.77);
        }
        a {
          color: #fff;
          &:hover {
            color: #efefef;
          }
        }

        &:nth-of-type(4) {
          border: 1px solid #fff;
          background: rgb(89, 152, 203);
        }
      }
    }
  }
</style>

<template>
  <header class="header">
    <nav>
      <ul class="nav-bar">
        <li><router-link to="brochure">商品宣传页</router-link></li>
        <li><a href="#">微信推广（H5）</a></li>
        <li><a href="#">宣传册（PDF）</a></li>
        <li><a href="#">登录/注册</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
    export default {};
</script>
