<template>
  <div id="factor-template" class="f-template-outer block-template">
    <FactorHeader
      :searchBarLabel="searchBarLabel"
      :searchBarValue="searchBarValue"
      @factor:search:keyup="factorSearchKeyup"
      @factor:search:submitted="factorSearchSubmitted"
      @factor:search:clear="factorSearchClear"
      @factor:search-suggestions:clicked="factorSearchSuggestionsClicked"
    >
      <template slot="logo" v-if="hasLogo">
        <slot name="logo" />
      </template>
      <template slot="nav">
        <slot name="nav" />
      </template>
      <template slot="profile">
        <slot name="profile" />
      </template>
    </FactorHeader>
    <main class="f-main">
      <slot name="main"></slot>
    </main>
    <FactorFooter>
      <template slot="links">
        <slot name="footer-links" />
      </template>
    </FactorFooter>
  </div>
</template>
<script>
import { FactorHeader, FactorFooter } from '@/components';

export default {
  name: 'FactorBlockTemplate',
  components: {
    FactorHeader,
    FactorFooter,
  },
  props: {
    searchBarLabel: {
      type: String,
      default: '',
    },
    searchBarValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    factorSearchSubmitted(value) {
      this.$emit('factor:search:submitted', { search: value });
    },
    factorSearchKeyup({ event, updateSuggestions }) {
      this.$emit('factor:search:keyup', { updateSuggestions, event });
    },
    factorSearchSuggestionsClicked(item) {
      this.$emit('factor:search-suggestions:clicked', { item });
    },
    factorSearchClear() {
      this.$emit('factor:search:clear');
    },
  },
  computed: {
    hasLogo() {
      return !!this.$slots['logo'];
    },
  },
};
</script>
<style lang="scss">
@import '../../shared/styles/_base.scss';
@import '../../shared/styles/_block-layout.scss';

body {
  background: var(--gray-20);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  letter-spacing: 0.04em;
}

.f-template-outer {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
