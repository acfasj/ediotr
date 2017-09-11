const textContent = `<div style='display: block;
                                 width: 100%;
                                 height: 100%;
                                 box-sizing: border-box;
                                 background-color: rgba(0,0,0,0);
                                 box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
                                 color: #1a1a1a;
                                 line-height: 1.5;
                                 padding: 5px;'>床前明月光</div>`.replace(/\s{2,}/g, '');

export default {
  text(index, num, params) {
    return {
      id: `n_${num}`,
      type: 'text',
      style: `z-index: ${index * 10};
              width: 100px;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 16px
              box-sizing: border-box;`.replace(/\s{2,}/g, ''),
      class: params.className ? params.className : '',
      attr: {},
      content: textContent,
    };
  },
};
