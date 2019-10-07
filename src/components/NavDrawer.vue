<template>
  <VNavigationDrawer
    v-model="drawer"
    app
    clipped
  >
    <VList dense>
      <v-list-item
        v-for="item in bookmarks"
        :key="item.title"
        @click="goTo(item.url)"
      >
        <v-list-item-icon>
          <VIcon>{{ item.icon }}</VIcon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action @click.stop="goToBlank(item.url)">
          <VIcon>tab</VIcon>
        </v-list-item-action>
        <v-list-item-action @click.stop="editBookmark">
          <BookmarkDialog
            :id="item.id"
            :title="item.title"
            :url="item.url"
            :icon="item.icon"
            type="edit"
          />
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <BookmarkDialog />
      </v-list-item>
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
