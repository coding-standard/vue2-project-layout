<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-img
      :src="logoUrl"
      contain
      class="mr-5"
      width="110"
      max-width="110"
      @click="$vuetify.goTo(0)"
    />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        text
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
      >{{ $t('core.menus.' + menu.name + '.text') }}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['menus', 'logoUrl'],
  methods: {
    ...mapMutations(['toggleDrawer']),
    onDrawerChange(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
  },
};
</script>
