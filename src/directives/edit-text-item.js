import $ from 'jquery';
import store from '../store';

export default {
  bind(el) {
    console.log('进来edit text了');
    const $el = $(el);
    console.log($el);
    console.log($el instanceof $);
    $el.on('dblclick', () => {
      const itemIndex = store.state.pages.checkedItems[0];
      console.log('双击有执行吗');
      if ($el.attr('type') !== 'text') {
        return;
      }

      const $realContent = $el.find('.content>div');
      $el.css('cursor', 'auto');
      $realContent.attr('contenteditable', true);
      window.getSelection().selectAllChildren($realContent[0]);

      $realContent.on('blur', () => {
        const html = $realContent.html();
        store.dispatch({
          type: 'changeText',
          index: itemIndex,
          html,
        });

        $realContent.attr('contenteditable', false)
          .off('blur');
        $el.css('cursor', 'move');
      });
    });
  },
};
