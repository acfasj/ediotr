import * as types from '../mutation-types';

const state = {
  pagesData: [],
  currentPage: 1,
  currentPageData: {},
};

const getters = {
  currentPage: state => state.currentPage,
  currentPageData: state => state.currentPageData,
  pagesData: state => state.pagesData,
};

const mutations = {
  [types.SELECT_PAGE](state, index) {
    state.currentPage = index + 1;
    state.currentPageData = state.pagesData[index];
  },
  [types.ADD_PAGE](state) {
    state.pagesData.push({
      items: [],
    });
    state.currentPage = state.pagesData.length;
    state.currentPageData = state.pagesData[state.currentPage - 1];
  },
  [types.DELETE_PAGE](state, index) {
    state.pagesData.splice(index, 1);
    // delete first page
    if (index === 0) {
      state.currentPage = 1;
    } else {
      // delete other pages
      state.currentPage -= 1;
    }
    state.currentPageData = state.pagesData[state.currentPage - 1];
  },

};

const actions = {
  selectPage({ commit }, index) {
    commit(types.SELECT_PAGE, index);
  },
  addPage({ commit }) {
    commit(types.ADD_PAGE);
  },
  deletePage({ state, commit }, index) {
    const count = state.pagesData.length;
    if (count === 1) {
      alert('至少留下一页啦~');
    } else {
      commit(types.DELETE_PAGE, index);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
