import * as types from './mutation-types';

export default {
  setStyle({ commit }, { index, params, isIn }) {
    commit(types.SET_STYLE, { index, params, isIn });
  },
  materialLibPic({ commit }, params) {
    commit(types.MATERIAL_LIB_PIC, params);
  },
  hideMaterialLibPic({ commit }) {
    commit(types.HIDE_MATERIAL_LIB_PIC);
  },
};
