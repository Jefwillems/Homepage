<template>
  <div class="dialog-container">
    <VDialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <VBtn
          v-if="type === ''"
          block
          v-on="on"
        >
          Add Bookmark
        </VBtn>
        <VIcon
          v-else
          v-on="on"
        >
          edit
        </VIcon>
      </template>

      <VCard>
        <VCardTitle
          class="headline mb-0"
          primary-title
        >
          New Bookmark
        </VCardTitle>
        <VDivider />
        <VForm v-model="valid">
          <VContainer>
            <VLayout
              row
              wrap
            >
              <VFlex
                xs12
                sm12
                md12
              >
                <VTextField
                  v-model="mTitle"
                  label="Title"
                  placeholder="Title"
                  filled
                  required
                  :rules="titleRules"
                />
              </VFlex>
              <VFlex
                xs12
                sm12
                md12
              >
                <VTextField
                  v-model="mUrl"
                  required
                  :rules="urlRules"
                  label="Url"
                  placeholder="url"
                  filled
                />
              </VFlex>
              <VFlex
                xs12
                sm12
                md12
              >
                <VAutocomplete
                  v-model="mIcon"
                  :items="icons"
                  :label="'Icon'"
                  filled
                  chips
                >
                  <template
                    slot="selection"
                    slot-scope="data"
                  >
                    <VChip>
                      <VAvatar>
                        <VIcon>{{ data.item }}</VIcon>
                      </VAvatar>
                      {{ data.item }}
                    </VChip>
                  </template>
                  <template
                    slot="item"
                    slot-scope="data"
                  >
                    <VChip>
                      <VAvatar>
                        <VIcon>{{ data.item }}</VIcon>
                      </VAvatar>
                      {{ data.item }}
                    </VChip>
                  </template>
                  <VSlideXReverseTransition
                    slot="append-outer"
                    mode="out-in"
                  />
                </VAutocomplete>
              </VFlex>
            </VLayout>
          </VContainer>
        </VForm>

        <VDivider />

        <VCardActions>
          <VSpacer />
          <VBtn
            color="primary"
            @click="addBookmark"
          >
            Add
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actions } from '../store/types';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      valid: false,
      dialog: false,
      titleRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Title must be shorter than 16 chars',
      ],
      urlRules: [
        u => !!u || 'Url is required',
        u => this.isValidUrl(u) || 'Url is not valid',
      ],
      mUrl: this.$props.url,
      mIcon: this.$props.icon,
      mTitle: this.$props.title,
    };
  },
  computed: {
    ...mapGetters('bookmarks', ['categories', 'icons']),
  },
  methods: {
    isValidUrl: (string) => {
      try {
        const url = new URL(string);
        return !!url;
      } catch (_) {
        return false;
      }
    },
    addBookmark() {
      if (this.valid) {
        if (this.id >= 0) {
          this.$store.dispatch(`bookmarks/${actions.PERSIST_BOOKMARK}`, {
            url: this.mUrl,
            title: this.mTitle,
            icon: this.mIcon,
            id: this.id,
          });
        } else {
          this.$store.dispatch(`bookmarks/${actions.PERSIST_BOOKMARK}`, {
            url: this.mUrl,
            title: this.mTitle,
            icon: this.mIcon,
          });
          this.mUrl = '';
          this.mTitle = '';
          this.mIcon = '';
        }
        this.dialog = false;
      } else {
        console.log('Form not valid');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.dialog-container {
  display: block;
  width: 100%;
}
</style>
