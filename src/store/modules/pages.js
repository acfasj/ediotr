import * as types from '../mutation-types';
import templates from '../../templates';

const state = {
  pagesData: [],
  currentPage: 1,
  currentPageData: {},
  checkedItems: [],
  checkedItemDataOnlyOne: {},
};

const getters = {
  currentPage: state => state.currentPage,
  currentPageData: state => state.currentPageData,
  pagesData: state => state.pagesData,
};

const mutations = {
  // pages
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
  // items in a page
  [types.SELECT_ITEM](state, index) {
    state.checkedItems.length = 0;
    state.checkedItemDataOnlyOne = state.currentPageData.items[index];
    state.checkedItems.push(index);
  },
  [types.ADD_TEXT](state) {
    const index = state.currentPageData.items.length + 1;
    const model = templates.text(index, 1, {});
    state.currentPageData.items.push(model);
  },
  [types.CHANGE_TEXT](state, { index, html }) {
    const oldHtml = state.currentPageData.items[index].content;
    state.currentPageData.items[index].content = oldHtml.replace(/>.+</, `>${html}<`);
    console.log(oldHtml.replace(/>.+</, `>${html}<`));
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
  selectItem({ commit }, index) {
    commit(types.SELECT_ITEM, index);
  },
  addText({ commit }) {
    commit(types.ADD_TEXT);
  },
  changeText({ commit }, { index, html }) {
    commit(types.CHANGE_TEXT, { index, html });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
