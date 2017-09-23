export default {
  text(index, params) {
    return {
      id: index,
      type: 'text',
      style: `z-index: ${(index + 1) * 10};
              width: 100px;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 16px;
              box-sizing: border-box;`.replace(/\s{2,}/g, ''),
      class: params.className ? params.className : '',
      attr: {},
      content: `<div style='display: block;
                            width: 100%;
                            height: 100%;
                            user-select: none;
                            box-sizing: border-box;
                            background-color: rgba(0,0,0,0);
                            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
                            color: #1a1a1a;
                            line-height: 1.5;
                            padding: 5px;'>床前明月光</div>`.replace(/\s{2,}/g, ''),
    };
  },
  pic(index, params) {
    return {
      id: index,
      type: 'pic',
      style: `z-index: ${(index + 1) * 10};
              width: 200px;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 16px;
              box-sizing: border-box;`.replace(/\s{2,}/g, ''),
      class: params.className ? params.className : '',
      attr: {},
      content: `<img src='${params.src}' 
                     style='display: block;
                     width: 100%;
                     height: 100%;
                     box-sizing: border-box;
                     user-select: none;
                     background-color: rgba(0,0,0,0);
                     box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
                     color: #1a1a1a;
                     line-height: 1.5;
                     padding: 5px;'>`.replace(/\s{2,}/g, ''),
    };
  },
};
