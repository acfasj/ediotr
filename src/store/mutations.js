import * as types from './mutation-types';

export default {
  [types.SET_STYLE](state, { index, params, isIn }) {
    const selectItem = state.pages.currentPageData.items[index];
    const str = isIn ? selectItem.content.match(/style="([\s\S]+?)"/)[1] : selectItem.style;
    const arr1 = str.split(';');
    const result = {};

    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== '') {
        const arr2 = arr1[i].split(':');
        result[arr2[0].replace(/(^\s+)|(\s+$)/g, '')] = arr2[1].replace(/(^\s+)|(\s+$)/g, '');
      }
    }

    const paramsKeys = Object.keys(params);
    paramsKeys.forEach((key) => {
      if (params[key] === '' && result[key]) {
        delete result[key];
      } else {
        result[key] = params[key];
      }
    });

    let resultStr = '';
    const resultKeys = Object.keys(result);
    resultKeys.forEach((key) => {
      resultStr += `${key}:${result[key]};`;
    });

    if (isIn) {
      selectItem.content = selectItem.content.replace(/style="([\s\S]+?)"/, `style="${resultStr}"`);
    } else {
      selectItem.style = resultStr;
    }
  },
  [types.MATERIAL_LIB_PIC](state, params) {
    state.materialLibPicObj.show = params.show;
    state.materialLibPicObj.msg = params.msg || '素材库';
    state.materialLibPicObj.type = params.type || 'pic';
  },
  [types.HIDE_MATERIAL_LIB_PIC](state) {
    state.materialLibPicObj.show = false;
  },
};

