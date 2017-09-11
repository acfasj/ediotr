import $ from 'jquery';
import store from '../store';

export default {
  bind() {
    $(document.body).on('mousedown', '#stage>div .content', (event) => {
      if ($('#stage>div')
          .eq(store.state.pages.checkedItems[0])
          .find('.content>div')
          .attr('contenteditable') === true) {
        return false;
      }
      const $stage = $('#stage');
      // const conWidth = parseFloat($stage.css('width'));
      // const conHeight = parseFloat($stage.css('height'));
      const preClientX = event.clientX;
      const preClientY = event.clientY;
      const itemLeft = {};
      const itemTop = {};

      $(window).on('mousemove', (e) => {
        for (let i = 0, len = store.state.pages.checkedItems.length; i < len; i += 1) {
          const obj = $stage.children().eq(store.state.pages.checkedItems[i]);
          const movingLeft = isNaN(parseFloat(obj.css('left'))) ? 0 : parseFloat(parseFloat(obj.css('left')));
          const movingTop = isNaN(parseFloat(obj.css('top'))) ? 0 : parseFloat(parseFloat(obj.css('top')));

          itemLeft[i] = itemLeft[i] ? itemLeft[i] : movingLeft;
          itemTop[i] = itemTop[i] ? itemTop[i] : movingTop;

          const difX = e.clientX - preClientX;
          const difY = e.clientY - preClientY;

          const x = difX + itemLeft[i];
          const y = difY + itemTop[i];

          store.dispatch({
            type: 'setStyle',
            index: store.state.pages.checkedItems[i],
            params: { left: `${x}px`, top: `${y}px` },
          });
        }

        return false;
      });

      $(window).on('mouseup', () => {
        $(window).off('mousemove');
        $(window).off('mouseup');
      });

      return false;
    });
  },
};

