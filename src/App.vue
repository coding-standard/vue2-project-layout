<template>
  <v-app>
    <core-appbar
      :menus="menus"
      :logoUrl="logoUrl"
    />
    <core-drawer :menus="menus" />
    <v-main class="content">
      <router-view></router-view>
      <help :show="showHelp"></help>
    </v-main>
    <core-footer :links="links" :dark="dark" :language="language"/>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreAppbar: () => import('@/components/core/Appbar'),
    CoreFooter: () => import('@/components/core/Footer'),
    Help: () => import('@/components/Help'),
  },
  data: () => ({
    showHelp: false,
  }),
  computed: {
    ...mapGetters([
      'menus',
      'logoUrl',
      'links',
      'dark',
      'language',
    ]),
  },
};
</script>
<style>
.countFont {
  font-size: 11px;
}
.content {
  width: 1260px;
  margin: auto;
}
</style>
