<template>
  <v-container>
    <notice :message="$t('node.notice')"></notice>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "First",
  data: () => ({
  }),
  created() {
  },
  methods: {},
  components: {
    Notice: () => import('@/components/Notice'),
  },
  computed: {
    ...mapGetters(["dark"]),
  },
};

</script>
<style scoped>
</style>
