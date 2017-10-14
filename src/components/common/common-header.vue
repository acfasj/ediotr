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
          color: #fff;
        }
      }
    }
  }

  .login {
    .modal {
      display: flex;
      flex-direction: column;
      width: 420px;
      height: 520px;
      border-radius: 4px;

      .modal-close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 1rem;
        background: transparent;
        color: #fff;
      }

      .modal-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: rgb(43, 137, 231);
        color: #fff;
        font-size: 0.8rem;
        h2 {
          padding: 10px 0;
          font-size: 1.4rem;
        }
      }

      .modal-nav {
        height: 40px;
        display: flex;
        background: #fff;
        .sign-tab {
          flex: 1;
          border-bottom: 1px solid #ddd;
          text-align: center;
          line-height: 40px;
          font-size: 0.7rem;
          cursor: pointer;

          &.active {
            border-bottom: 4px solid rgb(43, 137, 231);
            color: rgb(43, 137, 231);
          }
        }
      }

      .modal-content {
        flex: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 0 0 4px 4px;

        .signin-form {
          /*flex: 1;*/
        }

        .signup-form {
          /*flex: 1;*/
        }

        .form-item {
          width: 320px;
          padding: 6px 0;
          border-radius: 4px;
          margin-top: 10px;
          font-size: 0.7rem;
          input {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            margin-top: 10px;
            border: 1px solid #ddd;
            box-shadow: inset rgba(0, 0, 0, 0.075) 0 1px 1px 0;
          }
        }
        button.form-item {
          height: 48px;
          margin-top: 20px;
          background: rgb(43, 137, 231);
          color: #fff;
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
        <li @click="showModal = !showModal">登录/注册</li>
      </ul>
    </nav>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <div class="login modal-wrapper" v-show="showModal" @click.self="hideModal">
        <div class="modal">
          <button class="modal-close" @click="hideModal"><i class="fa fa-close"></i></button>
          <div class="modal-title">
            <h2>Make</h2>
            <p>商品宣传册智能化定制平台</p>
          </div>

          <div class="modal-nav">
            <div class="sign-tab" @click="signin" :class="{ active: !isSignup }">登录</div>
            <div class="sign-tab" @click="signup" :class="{ active: isSignup }">注册</div>
          </div>

          <div class="modal-content">
            <form class="singin-form" v-if="!isSignup">
              <div class="username form-item">
                <label for="signin-username">用户名</label>
                <input type="text" id="signin-username" placeholder="输入你的用户名">
              </div>
              <div class="password form-item">
                <label for="signin-password">密码</label>
                <input type="password" id="signin-password" placeholder="输入你的密码">
              </div>
              <button type="submit" class="form-item">登录</button>
            </form>

            <form class="signup-form" v-if="isSignup">
              <div class="username form-item">
                <label for="signup-username">用户名</label>
                <input type="text" id="signup-username" placeholder="输入你的用户名">
              </div>
              <div class="password form-item">
                <label for="signup-password">密码</label>
                <input type="password" id="signup-password" placeholder="输入你的密码">
              </div>
              <div class="password form-item">
                <label for="confirm-password">确认密码</label>
                <input type="password" id="confirm-password" placeholder="两次密码输入要保持一致">
              </div>
              <button type="submit" class="form-item">注册</button>
            </form>
          </div>
        </div>
      </div>
    </transition>

  </header>
</template>

<script>
    export default {
      data() {
        return {
          showModal: false,
          isSignup: false,
        };
      },
      methods: {
        hideModal() {
          this.showModal = false;
        },
        signin() {
          this.isSignup = false;
        },
        signup() {
          this.isSignup = true;
        },
      },
    };
</script>
