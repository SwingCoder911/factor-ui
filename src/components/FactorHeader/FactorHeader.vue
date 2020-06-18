<template>
  <div>
    <slot name="styles" />
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
          @factor:search:keyup="factorSearchKeyup"
          @factor:search:submitted="factorSearchSubmitted"
          @factor:search:clear="factorSearchClear"
          @factor:search-suggestions:clicked="factorSearchSuggestionsClicked"
        />
      </a>
    </div>
    <div class="f-header__column">
      <FactorSearchBar
        class="f-header__search desktop"
        :searchBarHandler="searchBarHandler"
        :searchBarLabel="searchBarLabel"
        :searchBarValue="searchBarValue"
        :searchBarDropdown="searchBarSuggestions"
        :dropdownEnabled="searchBarDropdownEnabled"
        @keyup="searchBarKeyup"
        v-on:search-bar-dropdown-clicked="searchBarDropdownClicked"
        v-on:clear-query="searchBarClearQuery"
        v-if="!hideSearchBar"
      />
      <FactorShowMore
        :buttonText="showMoreButtonText"
        :alternateButtonText="showMoreAlternateButtonText"
        buttonClass="top-bar__search-toggle"
        :closeWhenClickedOutside="true"
        ref="showMoreSearch"
        :buttonTextVisuallyHidden="true"
        :moveFocus="false"
      >
        <template slot="overflow">
          <FactorSearchBar
            class="f-header__search mobile"
            :searchBarHandler="searchBarHandler"
            :searchBarLabel="searchBarLabel"
            :searchBarValue="searchBarValue"
            :searchBarDropdown="searchBarSuggestions"
            :dropdownEnabled="searchBarDropdownEnabled"
            @keyup="searchBarKeyup"
            v-on:search-bar-dropdown-clicked="searchBarDropdownClicked"
            v-on:clear-query="searchBarClearQuery"
            v-if="!hideSearchBar"
          />
          <!-- <SearchForm
            :searchFormHandler="searchFormHandler"
            :searchFormLabel="fluent('search_input', 'placeholder')"
            class="search-form--small hide-desktop"
            id="mobile-search"
            v-on:close-search-form="closeMobileSearchForm()"
          ></SearchForm> -->
        </template>
        <template slot="button-content">
          <FactorIcon id="search" :width="20" :height="20" />
        </template>
      </FactorShowMore>
    </div>
    <div class="f-header__column">
      <nav class="f-nav">
        <slot name="nav" />
      </nav>
      <div class="f-profile">
        <slot name="profile" />
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
  </div>
</template>
<script>
import FactorSearchBar from '@/components/FactorSearchBar';
import FactorShowMore from '@/components/FactorShowMore';
import FactorIcon from '@/components/FactorIcon';

export default {
  name: 'FactorHeader',
  components: { FactorSearchBar, FactorShowMore, FactorIcon },
  props: {
    hideSearchBar: {
      type: Boolean,
      default: false,
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
    factorSearchSubmitted(queryObject) {
      this.$emit('factor:search:submitted', queryObject);
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
    searchBarDropdownEnabled() {
      if (this.searchBarConfig.dropdownEnabled === undefined) {
        return true;
      }
      return this.searchBarConfig.dropdownEnabled;
    },
  },
};
</script>
<style lang="scss">
@import '../../shared/styles/_variables.scss';

.f-header {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: $mediumWidth) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 6em;
  }

  background-color: var(--white);
  border-bottom: 1px solid var(--gray-30);

  & #{&}__column {
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: auto;
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

  & #{&}__search.desktop {
    display: none;

    @media (min-width: 57.5em) {
      display: block;
    }
  }

  & #{&}__search.mobile {
    padding: 1em;
    max-width: none;
    background: var(--white);
    margin-bottom: 1em;
    position: fixed;
    left: 0;
    right: 0;
    top: 5em;
    z-index: var(--layerTopBar);
    box-shadow: var(--shadowCard);
    display: block;

    @media (min-width: 57.5em) {
      display: none;
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

.top-bar__search-toggle {
  border: 0;
  background-color: transparent;
  padding: 0.75em;
  line-height: 0;
}
.top-bar__search-toggle[aria-expanded='true'] {
  background-color: var(--gray-20);
}

.f-nav {
}

.f-profile {
  height: 100%;
}
</style>
