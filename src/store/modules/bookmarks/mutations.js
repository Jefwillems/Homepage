import { mutations } from '../../types';

export default {
  [mutations.UPDATE_ICON_CATEGORIES](state, categories) {
    state.categories = [...categories];
  },
  [mutations.UPDATE_SELECTED_CATEGORY](state, category) {
    state.selected_category = category;
  },
  [mutations.UPDATE_BOOKMARKS](state, bookmarks) {
    state.bookmarks = bookmarks;
  },
};
