<template>
  <header class="f-header">
    <div class="f-header__column">
      <slot name="logo" v-if="!noLogo" />
      <a class="f-header__logo-link" href="/" v-if="!hasLogoSlot && !noLogo">
        <img
          src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"
          class="f-header__logo"
        />
      </a>
    </div>
    <div class="f-header__column">
      <FactorSearchBar
        class="f-header__search"
        v-if="!hideSearchBar"
        :searchBarLabel="searchBarLabelDisplay"
        :searchBarValue="searchBarValueDisplay"
        :searchBarDropdown="searchBarSuggestions"
        @keyup="searchBarKeyup"
        @factor:search:submitted="factorSearchSubmitted"
        @factor:search:clear="factorSearchClear"
        @factor:search-suggestions:clicked="searchBarDropdownClicked"
      />
    </div>
    <div class="f-header__column">
      <nav class="f-nav">
        <slot name="nav" />
      </nav>
      <div class="f-profile">
        <slot name="profile" />
      </div>
    </div>
  </header>
</template>
<script>
import FactorSearchBar from '@/components/FactorSearchBar';

export default {
  name: 'FactorHeader',
  components: { FactorSearchBar },
  props: {
    hideSearchBar: {
      type: Boolean,
      default: false,
    },
    searchBarConfig: {
      type: Object,
      default: () => ({}),
    },
    searchBarLabel: {
      type: String,
      default: '',
    },
    searchBarValue: {
      type: String,
      default: '',
    },
    noLogo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    factorSearchSubmitted(value) {
      this.$emit('factor:search:submitted', { search: value });
    },
    searchBarKeyup(e) {
      if (!this.searchBarConfig.onKeyUp) {
        return;
      }
      this.searchBarConfig.onKeyUp(e);
    },
    searchBarDropdownClicked(item) {
      if (!this.searchBarConfig.onDropdownClicked) {
        return;
      }
      this.searchBarConfig.onDropdownClicked(item);
    },
    factorSearchClear() {
      if (!this.searchBarConfig.onClearQuery) {
        return;
      }
      this.$emit('factor:search:clear');
    },
  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots['logo'];
    },
    searchBarLabelDisplay() {
      if (!this.searchBarLabel) {
        return '';
      }
      return this.searchBarLabel;
    },
    searchBarValueDisplay() {
      if (!this.searchBarValue) {
        return '';
      }
      return this.searchBarValue;
    },
    searchBarSuggestions() {
      if (!this.searchBarConfig.suggestions) {
        return [];
      }
      return this.searchBarConfig.suggestions;
    },
  },
};
</script>
<style lang="scss">
@import '../../shared/styles/_base.scss';
@import '../../shared/styles/_variables.scss';

.f-header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5em;
  background-color: $white;
  border-bottom: 1px solid $gray-30;

  & #{&}__column {
    &:first-child {
      display: flex;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

  & #{&}__logo-link {
    margin: 1em auto 1em 1em;
    padding: 0;
    border-radius: 0;
  }

  & #{&}__logo {
    display: block;
    height: 100%;
    width: auto;
  }
}

.f-nav {
  flex: 1;
}

.f-profile {
  height: 100%;
  flex: 0.2;
}
</style>
