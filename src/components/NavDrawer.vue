<template>
  <VNavigationDrawer
    v-model="drawer"
    clipped
    fixed
    app
    width="325"
  >
    <VList dense>
      <VListTile
        v-for="item in bookmarks"
        :key="item.title"
        @click="goTo(item.url)"
      >
        <VListTileAction>
          <VIcon>{{ item.icon }}</VIcon>
        </VListTileAction>
        <VListTileContent>
          <VListTileTitle>{{ item.title }}</VListTileTitle>
        </VListTileContent>
        <VListTileAction @click.stop="goToBlank(item.url)">
          <VIcon>tab</VIcon>
        </VListTileAction>
        <VListTileAction @click.stop="editBookmark">
          <BookmarkDialog
            :id="item.id"
            :title="item.title"
            :url="item.url"
            :icon="item.icon"
            type="edit"
          />
        </VListTileAction>
      </VListTile>
      <VListTile>
        <BookmarkDialog />
      </VListTile>
    </VList>
  </VNavigationDrawer>
</template>
<script>
import { mapGetters } from 'vuex';
import BookmarkDialog from './BookmarkDialog.vue';
import { actions } from '../store/types';

export default {
  components: { BookmarkDialog },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('bookmarks', ['bookmarks']),
  },
  created() {
    this.$store.dispatch(`bookmarks/${actions.FETCH_ICONS}`);
    this.$store.dispatch(`bookmarks/${actions.INIT_BOOKMARKS}`);
  },
  methods: {
    goTo(url) {
      window.location.assign(url);
    },
    goToBlank(url) {
      window.open(url, '_blank');
    },
    editBookmark() {},
  },
};
</script>
