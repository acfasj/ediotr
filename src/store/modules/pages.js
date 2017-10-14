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
  currentItemData: state => state.checkedItemDataOnlyOne,
  checkedItems: state => state.checkedItems,
};

const mutations = {
  // pages
  [types.SELECT_PAGE](state, index) {
    state.currentPage = index + 1;
    state.currentPageData = state.pagesData[index];
  },
  [types.ADD_PAGE](state) {
    state.pagesData.push({
      main: { background: '#fff' },
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
    let realIndex = index;
    if (index === undefined) {
      realIndex = state.currentPageData.items.length - 1;
    }
    state.checkedItems = [];
    state.checkedItemDataOnlyOne = state.currentPageData.items[realIndex];
    state.checkedItems.push(realIndex);
  },
  [types.DELETE_ITEM](state, index) {
    state.checkedItems = [];
    state.currentPageData.items.splice(index, 1);
  },
  [types.CLEAR_CHECKED_ITEMS](state) {
    state.checkedItems = [];
  },
  [types.ADD_TEXT](state) {
    const index = state.currentPageData.items.length - 1;
    const model = templates.text(index, {});
    state.currentPageData.items.push(model);
  },
  [types.CHANGE_TEXT](state, { index, html }) {
    const oldHtml = state.currentPageData.items[index].content;
    state.currentPageData.items[index].content = oldHtml.replace(/>.+</, `>${html}<`);
  },
  [types.ADD_PIC](state, { src, type }) {
    if (type === 'pic') {
      state.checkedItems = [];
      const index = state.currentPageData.items.length - 1;
      const model = templates.pic(index, { src });
      state.currentPageData.items.push(model);
    } else if (type === 'bg') {
      state.currentPageData.main.background = `#fff url('${src}') center center / contain no-repeat`;
    }
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
  deleteItem({ commit }, index) {
    commit(types.DELETE_ITEM, index);
  },
  clearCheckedItems({ commit }) {
    commit(types.CLEAR_CHECKED_ITEMS);
  },
  addText({ commit }) {
    commit(types.ADD_TEXT);
  },
  changeText({ commit }, { index, html }) {
    commit(types.CHANGE_TEXT, { index, html });
  },
  addPic({ commit }, { src, type }) {
    commit(types.ADD_PIC, { src, type });
    commit(types.HIDE_MATERIAL_LIB_PIC);
    if (type === 'pic') {
      commit(types.SELECT_ITEM);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
