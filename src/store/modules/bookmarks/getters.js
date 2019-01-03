export default {
  categories: ({ categories }) => categories.map(c => c.name),
  icons: ({ categories, selected_category: selected }) => {
    if (selected.toLowerCase() === 'any') {
      return categories.flatMap(c => c.icons).map(c => c.id);
    }
    return categories
      .filter(c => c.name === selected)
      .flatMap(c => c.icons)
      .map(c => c.id);
  },
  bookmarks: ({ bookmarks }) => bookmarks,
};
