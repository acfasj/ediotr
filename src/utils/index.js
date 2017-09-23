import store from '../store';

function getItemStyle(index, isIn) {
  let str = '';
  if (isIn) {
    str = store.state.pages.currentPageData.items[index]
      .content.match(/style='([\s\S]+)'/)[1];
  } else {
    str = store.state.pages.currentPageData.items[index].style;
  }

  const result = {};
  const arr = str.split(';');
  for (let i = 0, len = arr.length; i < len; i += 1) {
    const keyValueArr = arr[i].split(':');
    result[keyValueArr[0].trim()] = keyValueArr[1].trim();
  }

  return result;
}

export default {
  getItemStyle,
};
