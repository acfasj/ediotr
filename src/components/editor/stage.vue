<style rel="stylesheet/scss" lang="scss" scoped>
  .stage-wrapper {
    background: skyblue;
    #stage {
      background: pink;
      width: 960px;
      height: 540px;

      .content {
        cursor: move;
      }

      .edit_mode_cont {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border: 1px dashed #585858;
        .edit_mode_layer {
          position: relative;
          z-index: 800;
          -webkit-user-select: none;
          -webkit-user-drag: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          width: 100%;
          height: 100%;
          div {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #fff;
            border: 1px solid #585858;
            z-index: 888;
            box-sizing: border-box;
          }
          .edit_mode_radius_t_l{ cursor: nw-resize;left: -8px;top: -8px;border-radius: 50%; }
          .edit_mode_radius_t_m{ cursor: n-resize;left: 50%;margin-left: -6px;top: -8px; }
          .edit_mode_radius_t_r{ cursor: ne-resize;right: -8px;top: -8px;border-radius: 50%; }
          .edit_mode_radius_m_r{ cursor: e-resize;top: 50%;margin-top: -6px;right: -8px; }
          .edit_mode_radius_b_r{ cursor: se-resize;right: -8px;bottom: -8px;border-radius: 50%; }
          .edit_mode_radius_b_m{ cursor: s-resize;left: 50%;margin-left: -6px;bottom: -8px; }
          .edit_mode_radius_b_l{ cursor: sw-resize;bottom: -8px;left: -8px;border-radius: 50%; }
          .edit_mode_radius_m_l{ cursor: e-resize;top: 50%;margin-top: -6px;left: -8px; }
        }
      }
    }
  }
</style>

<template>
  <div class="stage-wrapper">
    <div id="stage" v-drag-item>
      <div v-for="(item, index) in currentPageData.items"
           :class="item.class"
           :style="item.style"
           :type="item.type"
           @mousedown="selectItem(index)"
           v-edit-text-item>
        <div class="content" v-html="item.content"></div>
        <div class="edit_mode_cont">
          <div class="edit_mode_layer">
            <div class="edit_mode edit_mode_radius_t_l"></div>
            <div class="edit_mode edit_mode_radius_t_m"></div>
            <div class="edit_mode edit_mode_radius_t_r"></div>
            <div class="edit_mode edit_mode_radius_m_r"></div>
            <div class="edit_mode edit_mode_radius_b_r"></div>
            <div class="edit_mode edit_mode_radius_b_m"></div>
            <div class="edit_mode edit_mode_radius_b_l"></div>
            <div class="edit_mode edit_mode_radius_m_l"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import DragItem from '../../directives/drag-item';
  import EditTextItem from '../../directives/edit-text-item';

  export default {
    data() {
      return {
      };
    },
    created() {
      console.log(DragItem, '这是drag item');
    },
    directives: {
      DragItem,
      EditTextItem,
    },
    computed: {
      ...mapGetters([
        'currentPageData',
      ]),
    },
    methods: {
      ...mapActions([
        'selectPage',
        'selectItem',
      ]),
    },
  };
</script>
