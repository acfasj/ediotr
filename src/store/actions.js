import * as types from './mutation-types';

export default {
  setStyle({ commit }, { index, params, isIn }) {
    commit(types.SET_STYLE, { index, params, isIn });
  },
};
