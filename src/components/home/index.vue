<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .index {
    @include background('../../assets/images/bg.jpg');
    background-attachment: fixed;

  }

  /* common */
  .module-title {
    font-size: 1rem;
    padding: 10px 0;
  }
  .module-intro {
    padding: 10px 0 30px 0;
  }
  .item-title {
    padding: 10px 0;
  }
  .common-padding {
    padding: 74px 114px;
  }

  /* banner */
  .banner {
    position: relative;
    height: 560px;
    @include background('../../assets/images/index-bg.png');

    .type-area {
      height: 100%;
    }

    .make {
      padding: 34px;
      color: #fff;
      text-align: center;
      .logo {
        position: relative;
        display: inline-block;
        margin-top: 30px;
        h1 {
          display: inline-block;
          width: 180px;
          height: 100px;
          text-indent: -9999rem;
          @include background('../../assets/images/logo.png');
        }
        .start {
          position: absolute;
          right: 0;
          top: -30px;
          transform: translateX(100%);
          font-style: italic;
          background: rgba(170, 172, 139, 0.8);
          color: #fff;
          /*transform: translateY(100%);*/
          font-size: 0.65rem;
          width: 66px;
          height: 66px;
          border: none;
          border-radius: 50% 50% 50% 0;
          animation: breathe 3s infinite ;
          &::after {
            content: '开始制作';
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes breathe {
          from {
            width: 66px;
            height: 66px;
            font-size: 0.65rem;
            background: rgba(170, 172, 139, 0.8);
          }
          to {
            width: 76px;
            height: 76px;
            font-size: 0.7rem;
            background: rgba(44, 172, 45, 0.94);
          }
        }
      }
      h2 {
        margin-top: 30px;
        font-size: 1.6rem;
      }
    }
  }

  /* brochure */
  .brochure {
    padding-top: 50px;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.91), rgba(176, 204, 222, 0.9));
   // @include background('../../assets/images/brochure-bg.jpg', cover, 0, -50px);

    .options {
      display: flex;
      justify-content: space-between;

      .item {
        text-align: center;
      }

      .circle {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid red;
        background-color: #fbf7f7;
        text-align: center;
        color: #858585;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        p {
          color: #000;
          font-size: 0.65rem;
        }
      }

      .line {
        display: inline-block;
        width: 100px;
        height: 1px;
        background-color: #858585;
      }

      .template {
        border-color: #ffb0bd;
        @include background('../../assets/images/template.png', 110%);
      }

      .template:hover {
      }

      .guide {
        border-color: #75d3ef;
        @include background('../../assets/images/guide.png', 110%);
      }

      .guide:hover {
      }

      .new-webpage {
        @include background('../../assets/images/new-webpage.png', 120%);
        border-color: #eceb9e;
      }

      .new-webpage:hover {
      }
    }
  }

  /* wechat */
  .wechat {
    .type-area {
      background: pink;
      @include background('../../assets/images/wechat-bg.png');
      height: 420px;
      overflow: hidden;

      .start {
        margin-top: 60px;
        background: rgba(89, 152, 203, 0.77);
        padding: 13px 20px;
        border-radius: 8px;
        transform: skewX(-8deg);
      }

      .phone {
        position: absolute;
        top: 60px;
        right: 140px;
        width: 280px;
        height: 380px;
        z-index: 100;
        @include background('../../assets/images/phone.png', 80%, 0, 10px);

        .hand {
          width: 99px;
          height: 155px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -40px;
          margin-top: 0;
          @include background('../../assets/images/hand.png', 80%, 0, 0);
          animation: up-and-down 3s infinite;
        }
        @keyframes up-and-down {
          from { margin-top: 0; }
          to { margin-top: 40px; }
        }
        .hand:before {
          content: '';
          width: 40px;
          height: 40px;
          border: 3px solid #fff;
          position: absolute;
          border-radius: 50%;
          left: 14px;
          top: -7px;
          z-index: -1;
          box-shadow: 3px 3px 20px 0px #fff,
            -3px -3px 20px #fff,
            3px -3px 20px #fff,
            -3px 3px 20px #fff,
            inset 1px 1px 10px #fff,
            inset -1px -1px 10px #fff,
            inset 1px -1px 10px #fff,
            -1px 1px 10px #fff;
        }

      }
    }
  }

  /* pdf */
  .pdf {
    .type-area {
      background: skyblue;
      @include background('../../assets/images/pdf-bg.png');
      height: 480px;

      .pdf-show {
        margin-top: 20px;
      }

      .pdf-circle {
        display: inline-block;
        width: 120px;
        height: 120px;
      }

      .circle-row {
        padding: 0 60px;
        display: flex;
        justify-content: space-between;
      }

      .pdf-circle1 {
        @include background('../../assets/images/pdf-circle1.png');
      }
      .pdf-circle2 {
        @include background('../../assets/images/pdf-circle2.png');
      }
      .pdf-circle3 {
        @include background('../../assets/images/pdf-circle3.png');
      }
      .pdf-circle4 {
        @include background('../../assets/images/pdf-circle4.png');
      }
      .pdf-circle5 {
        @include background('../../assets/images/pdf-circle-add.png');
      }
    }
  }

  /* footer */
  .footer {
    text-align: center;
    padding: 42px;
    background: rgba(84, 160, 188, 0.3);
  }
</style>

<template>
  <div class="index">
    <div class="banner">
      <div class="type-area">
        <common-header></common-header>
        <div class="make">
          <div class="logo">
            <h1>logo</h1>
            <router-link to="editor" class="start"></router-link>
          </div>
          <h2>商品宣传册智能化定制平台</h2>
        </div>
      </div>
    </div>

    <div class="brochure type-area common-padding">
      <h3 class="module-title">商品宣传页</h3>
      <p class="module-intro">原创模板，精选风格。设计出独属你的商品宣传页面。</p>
      <div class="options">
        <div class="item" v-for="item in options"
             @mouseenter="item.showDtail=true"
             @mouseleave="item.showDtail=false">
          <div class="circle" :class="item.className">
            <div class="intro">
              <!--<div class="line"></div>-->
              <transition
                enter-active-class="animated rotateIn"
                leave-active-class="animated zoomOut">
                <p v-show="item.showDtail" class="item-detail">{{ item.detail }}</p>
              </transition>
            </div>
          </div>
          <h4 class="item-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>

    <div class="wechat">
      <div class="type-area common-padding">
        <h3 class="module-title">微信推广(H5)</h3>
        <p class="module-intro">天马行空，不忘初心。以纸为媒介，肆意挥洒你的创意。</p>
        <div><button type="button" class="start">开始制作吧!</button></div>
        <div class="phone"><div class="hand"></div></div>
      </div>
    </div>

    <div class="pdf">
      <div class="type-area common-padding">
        <h3 class="module-title">宣传册(PDF)</h3>
        <p class="module-intro">天马行空，不忘初心。以纸为媒介，肆意挥洒你的创意。</p>
        <div class="pdf-show">
          <div class="circle-row" style="padding: 0 170px; justify-content: space-around">
            <div class="pdf-circle pdf-circle1"></div>
            <div class="pdf-circle pdf-circle2"></div>
          </div>
          <div class="circle-row">
            <div class="pdf-circle pdf-circle3"></div>
            <div class="pdf-circle pdf-circle4"></div>
            <div class="pdf-circle pdf-circle5"></div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>Copyright©2017  杭电数媒学院. &nbsp;All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/common-header';

  export default {
    data() {
      return {
        options: [
          {
            title: '挑选模板',
            detail: '好的模板是成功的开始',
            className: 'template',
            showDtail: false,
          },
          {
            title: '新手指南',
            detail: '新手？我们不怕!',
            className: 'guide',
            showDtail: false,
          },
          {
            title: '新建网页',
            detail: '迫不及待了吗？',
            className: 'new-webpage',
            showDtail: false,
          },
        ],
      };
    },
    components: {
      CommonHeader,
    },
  };
</script>
