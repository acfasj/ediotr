<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/mixins";

  /* banner */
  .banner {
    position: relative;
    height: 560px;
    @include background('../../assets/images/brochure-banner.png', cover, 0, -60px);

    .type-area {
      height: 100%;
    }

    .make {
      position: relative;
      margin-top: 120px;
      padding: 34px;
      color: #fff;
      text-align: center;
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.9rem;
        font-style: italic;
      }

      .choose {
        position: absolute;
        top: 160px;
        left: 50%;
        transform: translateX(-50%);
        img {
          display: inline-block;
          animation: up-and-down 2s infinite;
        }
        a {
          display: block;
          font-size: 18px;
          margin-bottom: 30px;
          color: #eeeeee;
          cursor: pointer;
        }
      }
    }
  }

  #brochure-content {
    padding-bottom: 100px;
    .tabs-nav {
      display: flex;
      width: 580px;
      margin: 20px auto;
      justify-content: space-between;

      .tab-title {
        padding: 10px 20px;
      }
      .tab-title.active {
        color: #175199;
        border-bottom: 2px solid #54749D;
      }
    }

    .tabs-body {
      display: flex;
      justify-content: center;

      .tab-content {
        display: flex;
        width: 864px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
      .box {
        width: 240px;
        height: 220px;
        margin-top: 40px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 3px 3px 12px #ccc,
        3px -3px 12px #ccc,
        -3px -3px 12px #ccc,
        -3px 3px 12px #ccc;
        text-align: center;
        a.cover {
          display: block;
          width: 240px;
          height: 160px;
          border-radius: 20px 20px 0 0;
        }
      }
      .line {
        width: 200px;
        height: 1px;
        background-color: #787878;
        margin: 4px auto;
      }
    }
  }

  #theme {
    width: 864px;
    margin: 20px auto;
  }

  #select-theme {
    color: #54749D;
    background-color: #F0F4F7;
    border-style: solid;
    border-color: #54749D;
    border-width: 1px 0;
    padding-left: 200px;
    overflow: hidden;
    position: relative;
  }

  #select-theme::after {
    content: '风格主题';
    display: block;
    position: absolute;
    left: 70px;
    top: 50px;
  }

  #tags {
    color: #54749D;
  }

  #tags span {
    float: left;
    display: block;
    padding: 0;
    margin: 20px;
    text-align: center;
  }

  #slide-toggle {
    display: block;
    width: 200px;
    height: 36px;
    margin: 0 auto;
    position: relative;

    line-height: 36px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  #slide-toggle::after {
    content: '';
    display: block;
    height: 0;
    width: 200px;
    z-index: -1;
    position: absolute;
    left: -20px;
    top: 0;

    color: #fff;
    font-size: 14px;
    cursor: pointer;

    border-top: 36px solid #54749D;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

</style>

<template>
  <div class="brochure">
    <div class="banner">
      <div class="type-area">
        <common-header></common-header>
        <div class="make">
          <h1>商品宣传册制作</h1>
          <p>Production of Brochure</p>
          <div class="choose">
            <a @click="goAnchor('#brochure-content')">选择模板</a>
            <img src="../../assets/images/circular-down.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div id="brochure-content" class="type-area">
      <nav class="tabs-nav">
        <a class="tab-title"
           v-for="item in tabArr"
           @click="tabIndex=item.id"
           :class="{ active: tabIndex===item.id}">{{ item.title }}</a>
      </nav>

      <div class="tabs-body">
        <div class="tab-content tab-content1" v-show="tabIndex==1">
          <div class="box" v-for="item in tabContent1">
            <a href="#" class="cover" :style="{ background: `url(${item.bgUrl}) center center / cover no-repeat`}"></a>
            <h3 class="box-title">母亲的怀抱</h3>
            <div class="line"></div>
            <p class="box-intro">宣传页：母婴</p>
          </div>
        </div>
        <div class="tab-content tab-content2" v-show="tabIndex==2">
          <div id="theme">
            <div id="select-theme" v-show="showTheme">
              <div id="tags">
                <span>服装</span><span>鞋/箱</span><span>珠宝配饰</span><span>美妆洗护</span><span>家具家饰</span><span>运动户外</span>
                <span>低调奢华</span><span>朴实无华</span><span>温馨</span><span>简约淡雅</span><span>高贵华丽</span>
              </div>
            </div>
            <button id="slide-toggle" @click="themeToggle">隐藏</button>
          </div>
          <div class="box" v-for="item in tabContent2">
            <a href="#" class="cover" :style="{ background: `url(${item.bgUrl}) center center / cover no-repeat`}"></a>
            <h3 class="box-title">母亲的怀抱</h3>
            <div class="line"></div>
            <p class="box-intro">宣传页：母婴</p>
          </div>
        </div>
        <div class="tab-content" v-show="tabIndex==3">
          <div class="box" v-for="item in tabContent3">
            <a href="#" class="cover" :style="{ background: `url(${item.bgUrl}) center center / cover no-repeat`}"></a>
            <h3 class="box-title">母亲的怀抱</h3>
            <div class="line"></div>
            <p class="box-intro">宣传页：母婴</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../common/common-header';

  export default {
    data() {
      return {
        tabIndex: 1,
        tabArr: [
          { id: 1, title: '运筹帷幄' },
          { id: 2, title: '随心所欲' },
          { id: 3, title: '私人订制' },
        ],
        tabContent1: [
          { bgUrl: 'static/images/baby.jpg' },
          { bgUrl: 'static/images/love-letter.jpg' },
          { bgUrl: 'static/images/small-town.jpg' },
          { bgUrl: 'static/images/jewel.jpg' },
          { bgUrl: 'static/images/baby.jpg' },
          { bgUrl: 'static/images/love-letter.jpg' },
          { bgUrl: 'static/images/small-town.jpg' },
        ],
        tabContent2: [
          { bgUrl: 'static/images/baby.jpg' },
          { bgUrl: 'static/images/love-letter.jpg' },
          { bgUrl: 'static/images/small-town.jpg' },
          { bgUrl: 'static/images/jewel.jpg' },
        ],
        tabContent3: [
          { bgUrl: 'static/images/baby.jpg' },
          { bgUrl: 'static/images/love-letter.jpg' },
          { bgUrl: 'static/images/small-town.jpg' },
          { bgUrl: 'static/images/jewel.jpg' },
          { bgUrl: 'static/images/baby.jpg' },
          { bgUrl: 'static/images/love-letter.jpg' },
        ],
        showTheme: true,
        themeBtnText: '隐藏',
      };
    },
    components: {
      CommonHeader,
    },
    methods: {
      goAnchor(selector) {
        console.log('it does');
        const anchor = this.$el.querySelector(selector);
        console.log(anchor);
        console.log(anchor.offsetTop);
        document.body.scrollTop = anchor.offsetTop;
      },
      themeToggle() {
        this.showTheme = !this.showTheme;
        if (this.showTheme) {
          this.showTheme = '隐藏';
        } else {
          this.showTheme = '显示';
        }
      },
    },
  };
</script>
