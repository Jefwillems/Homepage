import localforage from 'localforage';
import { actions, mutations } from '../../types';

export default {
  async [actions.FETCH_ICONS]({ commit }) {
    const d = await import('../../../../public/icons.json');
    const { categories } = d;
    commit(mutations.UPDATE_ICON_CATEGORIES, categories);
  },
  async [actions.PERSIST_BOOKMARK]({ commit }, bm) {
    const currentBookmarks = await localforage.getItem('bookmarks');
    if (!bm.id) {
      currentBookmarks.push({ id: currentBookmarks.length, ...bm });
    } else {
      Object.assign(currentBookmarks.find((el) => el.id === bm.id), bm);
    }
    const bms = await localforage.setItem('bookmarks', currentBookmarks);
    commit(mutations.UPDATE_BOOKMARKS, bms);
  },
  async [actions.INIT_BOOKMARKS]({ commit }) {
    let currentBookmarks = await localforage.getItem('bookmarks');
    if (currentBookmarks === null) {
      const json = await import('./defaults.json');
      currentBookmarks = [...json.bookmarks];
    }
    const bms = await localforage.setItem('bookmarks', currentBookmarks);
    commit(mutations.UPDATE_BOOKMARKS, bms);
  },
};
