<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/variables";

  #attr-list {
    background: slateblue;

    .title {
      height: 50px;
      background: $activeColor;
      text-align: center;
      padding: 14px;
      span {
        color: #fff;
        line-height: 22px;
      }
    }
  }
</style>

<template>
  <div id="attr-list">
    <div class="title">
      <span>元素属性</span>
    </div>

    <ul>
      <li>
        <span>边框</span>
        <div>
          <div>
            <label for="border-style">样式:</label>
            <select id="border-style" @change="setItemStyle($event)">
              <option value="none">无</option>
              <option value="solid">直线</option>
              <option value="dashed">虚线</option>
              <option value="dotted">点线</option>
              <option value="double">双实线</option>
              <option value="groove">3D凹槽</option>
              <option value="ridge">3D垄状</option>
              <option value="inset">3D内阴影</option>
              <option value="outset">3D外阴影</option>
            </select>
          </div>
          <div>
            <label for="border-width">粗细:</label>
            <input type="range" id="border-width" min="0" max="50" step="1" value="5" @change="setItemStyle($event, true)">
          </div>
          <div>
            <label for="border-radius">圆角:</label>
            <input type="range" id="border-radius" min="0" max="50" step="1" value="0" @change="setItemStyle($event, true)">
          </div>
          <div>
            <label for="border-color">颜色:</label>
            <input type="color" id="border-color" @change=setItemStyle($event)>
          </div>
        </div>
      </li>

      <li>
        <span>旋转</span>
        <input type="range" id="transform" min="0" max="360" step="0" value="5" @change="setItemStyle($event, true)">
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from '../../store';
  import utils from '../../utils';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters([
        'currentItemData',
        'checkedItems',
      ]),
      itemStyle() {
        return this.getItemStyle(this.checkedItems[0], true);
      },
    },
    methods: {
      getItemStyle: utils.getItemStyle,
      setItemStyle(event, px) {
        if (this.checkedItems.length <= 0) {
          return;
        }

        const params = {};
        let value = event.target.value;
        if (px) {
          value += 'px';
        }
        params[event.target.id] = value;
        console.log(params);
        store.dispatch({
          type: 'setStyle',
          index: store.state.pages.checkedItems[0],
          params,
          isIn: true,
        });
      },
    },
    created() {
    },
  };
</script>
