import Vue from 'vue';
import Vuex from 'vuex';
import pages from './modules/pages';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  modules: {
    pages,
  },
});
