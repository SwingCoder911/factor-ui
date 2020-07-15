<template>
  <form class="search-bar" @submit="handleSubmit" method="GET" tabindex="0">
    <fieldset>
      <legend class="visually-hidden">search</legend>
      <div class="search-bar__fields">
        <label for="search-query" class="visually-hidden">search-input</label>
        <input
          type="text"
          id="search-query"
          :class="{
            'search-bar__input': true,
            'with-dropdown': dropdownItems.length,
          }"
          name="query"
          v-model="searchQuery"
          class="search-bar__input"
          ref="searchQueryField"
          :placeholder="searchBarLabel"
          :autocomplete="dropdownEnabled ? 'off' : 'on'"
          @keyup="handleKeyUp"
          @blur="onSearchQueryBlur"
          @focus="onSearchQueryFocus"
        />
        <button
          type="button"
          v-if="searchQuery && searchQuery.length > 0"
          @click="clearQuery"
          class="search-bar__clear-button"
        >
          <FactorIcon id="x" :width="20" :height="20" />
          <span class="visually-hidden">clear search</span>
        </button>
        <button type="submit" class="search-bar__submit">
          <FactorIcon id="search" :width="18" :height="18" />
          <span class="visually-hidden">search</span>
        </button>
      </div>
    </fieldset>
    <ul
      class="search-bar__dropdown"
      v-if="dropdownItems.length && dropdownEnabled"
    >
      <li
        :class="{
          'dropdown-item': true,
          active: focusedSuggestion === idx,
        }"
        v-for="(item, idx) in dropdownItems"
        :key="idx"
        v-on:mousedown="onDropdownItemClick(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </form>
</template>

<script>
import FactorIcon from '@/components/FactorIcon';

export default {
  name: 'FactorSearchBar',
  props: {
    searchBarLabel: {
      type: String,
      default: '',
    },
    searchBarValue: {
      type: String,
      default: '',
    },
    searchBarDropdown: {
      type: Array,
      default: () => [],
    },
    dropdownEnabled: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    FactorIcon,
  },
  methods: {
    arrowListener(e) {
      if (this.dropdownItems.length) {
        if (
          e.keyCode === 40 &&
          this.focusedSuggestion < this.dropdownItems.length - 1
        ) {
          e.preventDefault();
          this.focusedSuggestion += 1;
        } else if (e.keyCode === 38 && this.focusedSuggestion > 0) {
          e.preventDefault();
          this.focusedSuggestion -= 1;
        } else if (e.keyCode === 13 && this.focusedSuggestion > -1) {
          if (this.focusedSuggestion > -1) {
            e.preventDefault();
            this.$emit(
              'factor:search-suggestions:clicked',
              this.dropdownItems[this.focusedSuggestion],
            );
          } else if (this.focusedSuggestion == -1) {
            this.dropdownItems = [];
          }
        } else if (e.keyCode === 27) {
          e.preventDefault();
          this.dropdownItems = [];
        } else {
          this.focusedSuggestion = -1;
        }
      } else {
        this.focusedSuggestion = -1;
      }
    },
    onSearchQueryFocus() {
      this.$refs.searchQueryField.addEventListener(
        'keydown',
        this.arrowListener,
      );
    },
    onSearchQueryBlur() {
      this.$refs.searchQueryField.removeEventListener(
        'keydown',
        this.arrowListener,
      );
      this.dropdownItems = [];
    },
    handleSubmit(event) {
      event.preventDefault();
      if (!this.searchQuery.length > 0) {
        this.$refs.searchQueryField.focus();
      } else {
        this.$emit('factor:search:close');
      }
      this.$emit('factor:search:submitted', { search: this.searchQuery });
    },
    handleKeyUp(e) {
      const updateSuggestions = (suggestions) => {
        this.dropdownItems = suggestions;
      };
      if (e.keyCode !== 13) {
        this.$emit('factor:search:keyup', { updateSuggestions, event: e });
      }
    },
    clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('factor:search:clear');
    },
    onDropdownItemClick(item) {
      this.$emit('factor:search-suggestions:clicked', item);
    },
  },
  watch: {
    searchBarValue(value) {
      this.searchQuery = value;
    },
    searchBarLabel(value) {
      this.searchLabel = value;
    },
  },
  data() {
    return {
      searchQuery: this.searchBarValue,
      searchLabel: this.searchBarLabel,
      focusedSuggestion: -1,
      // TODO: suggestions https://github.com/vuejs/vue/issues/5443#issuecomment-380212050
      dropdownItems: [],
    };
  },
  mounted() {
    this.$refs.searchQueryField.focus();
  },
};
</script>

<style lang="scss">
@import '../../shared/styles/_variables.scss';
.search-bar {
  width: 100%;
  max-width: 31em;
  position: relative;
  margin: 0;

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }

  & #{&}__fields {
    display: flex;
    flex-direction: row;
    position: relative;

    input,
    button[type='submit'] {
      font-size: 1.15em;
    }
  }

  & #{&}__input {
    border: 1px solid $gray-30;
    width: 100%;
    background-color: $white;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    padding: 0.5em 1.75em 0.5em 3em;
    outline: 0;

    &::placeholder {
      text-align: center;
    }
  }

  & #{&}__submit {
    border: 0;
    border-right: 1px solid $gray-30;
    appearance: none;
    background-color: $white;
    width: 2.5em;
    padding: 0.1em 0.5em;
    margin: 0.5em -1px 0.5em 0;
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 1px;
    transition: background-color 0.2s ease-in-out;

    img {
      vertical-align: middle;
      width: 1.15em;
    }
  }

  & #{&}__clear-button {
    background-color: $white;
    position: absolute;
    border: 0;
    top: 3px;
    right: 1px;
    bottom: 1px;
    width: 2em;
    padding: 0;
    line-height: 1;

    &:hover {
      color: $blue-60;
    }

    @media (min-width: 57.5em) {
      width: 3em;
    }
  }

  &--small {
    padding: 1em;
    max-width: none;
    background: $white;
    margin-bottom: 1em;
    position: fixed;
    left: 0;
    right: 0;
    top: 5em;
    z-index: var($layerTopBar);
    box-shadow: var(--shadowCard);
  }

  & #{&}__dropdown {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    right: 0;
    background: $white;
    border-bottom: 1px solid $gray-30;
    border-left: 1px solid $gray-30;
    border-right: 1px solid $gray-30;
    border-top: none;

    .dropdown-item {
      padding: 0.5em 1.75em 0.5em 3em;
      font-size: 1.15em;

      &:hover {
        background: $gray-20;
      }
      &.active {
        background: $gray-20;
      }
    }
  }

  &:focus,
  &:hover,
  &:focus-within {
    .search-bar__input {
      border: 1px solid $blue-60;
    }

    button[type='submit'] {
      border-right: 1px solid $blue-60;
    }

    .search-bar__dropdown {
      border-bottom: 1px solid $blue-60;
      border-left: 1px solid $blue-60;
      border-right: 1px solid $blue-60;
    }
  }
}
</style>
