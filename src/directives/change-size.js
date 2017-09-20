import $ from 'jquery';
import store from '../store';

export default {
  bind(el) {
    const bindEvent = function (obj, index) {
      obj.bind('mousedown', (event) => {
        // const conWidth = parseFloat($('#stage').css('width'));
        // const conHeight = parseFloat($('#stage').css('height'));

        const preClientX = event.clientX;
        const preClientY = event.clientY;

        const itemWidth = parseFloat($(el).width());
        const itemHeight = parseFloat($(el).height());

        const itemLeft = parseFloat($(el).css('left'));
        const itemTop = parseFloat($(el).css('top'));

        const btnIndex = index;

        $(window).bind('mousemove', (ev) => {
          const difX = ev.clientX - preClientX;
          const difY = ev.clientY - preClientY;

          let styleParams = {};
          switch (btnIndex) {
            case 0:
              if ((itemWidth - difX) > 3 && (itemHeight - difY) > 3) {
                if (ev.shiftKey) {
                  styleParams = {
                    width: `${itemWidth - difX}px`,
                    height: `${(itemHeight / itemWidth) * (itemWidth - difX)}px`,
                    left: `${itemLeft + difX}px`,
                    top: (itemTop + itemHeight / itemWidth * difX) + 'px'
                  }
                } else {
                  styleParams = {
                    width: (itemWidth - difX) + 'px',
                    height: (itemHeight - difY) + 'px',
                    left: (itemLeft + difX) + 'px',
                    top: (itemTop + difY) + 'px'
                  }
                }
              }
              break;
            case 1:
              if ((itemHeight - difY) > 3) {
                styleParams = {
                  height: (itemHeight - difY) + 'px',
                  top: (itemTop + difY) + 'px'
                }
              }
              break;
            case 2:
              if ((itemWidth - difX) > 3 && (itemHeight - difY) > 3) {
                if (ev.shiftKey) {
                  styleParams = {
                    width: (itemWidth + difX) + 'px',
                    height: (itemHeight / itemWidth * (itemWidth + difX)) + 'px',
                    top: (itemTop - (itemHeight / itemWidth * difX)) + 'px'
                  }
                } else {
                  styleParams = {
                    width: (itemWidth + difX) + 'px',
                    height: (itemHeight - difY) + 'px',
                    top: (itemTop + difY) + 'px'
                  }
                }
              }
              break;
            case 3:
              if ((itemWidth - difX) > 3) {
                styleParams = {
                  width: (itemWidth + difX) + 'px'
                }
              }
              break;
            case 4:
              if ((itemWidth - difX) > 3 && (itemHeight - difY) > 3) {
                if (ev.shiftKey) {
                  styleParams = {
                    width: (itemWidth + difX) + 'px',
                    height: (itemHeight / itemWidth * (itemWidth + difX)) + 'px'
                  }
                } else {
                  styleParams = {
                    width: (itemWidth + difX) + 'px',
                    height: (itemHeight + difY) + 'px'
                  }
                }
              }
              break;
            case 5:
              if ((itemHeight - difY) > 3) {
                styleParams = {
                  height: (itemHeight + difY) + 'px'
                }
              }
              break;
            case 6:
              if ((itemWidth - difX) > 3 && (itemHeight - difY) > 3) {
                if (ev.shiftKey) {
                  styleParams = {
                    width: (itemWidth - difX) + 'px',
                    height: (itemHeight / itemWidth * (itemWidth - difX)) + 'px',
                    left: (itemLeft + difX) + 'px'
                  }
                } else {
                  styleParams = {
                    width: (itemWidth - difX) + 'px',
                    height: (itemHeight + difY) + 'px',
                    left: (itemLeft + difX) + 'px'
                  }
                }
              }
              break;
            case 7:
              if ((itemWidth - difX) > 3) {
                styleParams = {
                  width: (itemWidth - difX) + 'px',
                  left: (itemLeft + difX) + 'px'
                }
              }
              break;
            default:
              styleParams = {
                width: '0px',
                left: '0px',
              }
          }
          store.dispatch({
            type: 'setStyle',
            index: store.state.pages.checkedItems[0],
            params: styleParams,
          });
        });
        $(window).bind('mouseup', function() {
          $(window).unbind('mousemove');
          $(window).unbind('mouseup');
        });
      })
    };

    for (let i = 0; i < $(el).find('.edit_mode').length; i++) {
      bindEvent($(el).find('.edit_mode').eq(i), i);
    }

  }
}
