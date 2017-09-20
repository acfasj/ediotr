import Vue from 'vue';
import Vuex from 'vuex';
import pages from './modules/pages';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const getters = {
  materialLibPicObj: state => state.materialLibPicObj,
};

export default new Vuex.Store({
  state: {
    materialLibPicObj: {
      show: false,
      msg: '素材库',
      type: 'pic',
    },
  },
  getters,
  mutations,
  actions,
  modules: {
    pages,
  },
});
