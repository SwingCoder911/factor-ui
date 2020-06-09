<template>
  <FactorBlockTemplate :searchBarConfig="searchBarConfig">
    <NavExample slot="nav" />
    <ProfileExample slot="profile" />
    <BlockLayoutExample slot="main" />
    <!-- <NavLayoutExample slot="main" /> -->
    <FooterLinksExample slot="footer-links" />
  </FactorBlockTemplate>
</template>

<script>
import FactorBlockTemplate from './templates/FactorBlockTemplate';
// import FactorFlowTemplate from './templates/FactorFlowTemplate';
// import FactorNavTemplate from './templates/FactorNavTemplate';

// Importing example components
import NavExample from '@/examples/NavExample.vue';
// import SideNavExample from '@/examples/SideNavExample.vue';

import ProfileExample from '@/examples/ProfileExample.vue';
import BlockLayoutExample from '@/examples/BlockLayoutExample.vue';
// import FlowLayoutExample from '@/examples/FlowLayoutExample.vue';
// import NavLayoutExample from '@/examples/NavLayoutExample.vue';
import FooterLinksExample from '@/examples/FooterLinksExample.vue';

export default {
  name: 'App',
  components: {
    // FactorFlowTemplate,
    FactorBlockTemplate,
    // FactorNavTemplate,

    // Example components
    NavExample,
    // SideNavExample,
    ProfileExample,
    BlockLayoutExample,
    // FlowLayoutExample,
    // NavLayoutExample,
    FooterLinksExample,
  },
  computed: {
    searchBarConfig() {
      return {
        handler: this.searchBarHandler,
        label: 'Welcome to AirMozilla',
        value: '',
      };
    },
  },
  methods: {
    searchBarHandler(value) {
      console.log('Search bar value: ', value);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
