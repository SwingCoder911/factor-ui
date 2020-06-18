<template>
  <div class="f-pn">
    <template v-if="scope.isLoggedIn">
      <FactorShowMore
        :buttonText="getStrings(strings, 'buttonText')"
        :alternateButtonText="getStrings(strings, 'alternateButton')"
        buttonClass="top-bar__user-menu-toggle"
        :closeWhenClickedOutside="true"
        :buttonTextVisuallyHidden="true"
      >
        <template slot="overflow">
          <FactorUserMenu></FactorUserMenu>
        </template>
        <template slot="button-content">
          <FactorUserPicture
            v-if="scope.isReady"
            :avatar="{
              picture: user.picture.value,
              username: user.primaryUsername.value,
            }"
            :size="40"
            :pictureSize="100"
            :showLabel="scope.isStaff"
          ></FactorUserPicture>
          <FactorUserPicture
            v-else
            :size="40"
            :pictureSize="100"
            :showLabel="scope.isStaff"
          ></FactorUserPicture>
        </template>
      </FactorShowMore>
    </template>
    <FactorExternalButtonLink
      v-else
      href="/_/login"
      class="top-bar__login"
      iconRight="chevron-right"
      :text="fluent('log_in')"
    ></FactorExternalButtonLink>
  </div>
</template>
<script>
import {
  FactorShowMore,
  FactorUserMenu,
  FactorUserPicture,
  FactorExternalButtonLink,
} from '@/components';

import { getStrings } from '@/shared/utils/stringUtils';

export default {
  components: {
    FactorShowMore,
    FactorUserMenu,
    FactorUserPicture,
    FactorExternalButtonLink,
  },
  methods: {
    getStrings,
  },
  props: {
    strings: {
      type: Object,
      default: {
        buttonText: '',
        alternateButtonText: '',
      },
    },
  },
};
</script>
<style lang="scss">
.top-bar__user-menu-toggle {
  border: 0;
  background-color: transparent;
  padding: 1.6em;
}
.top-bar__user-menu-toggle:hover {
  background-color: var(--gray-20);
}
.top-bar__user-menu-toggle img {
  border-radius: var(--imageRadius);
}
.top-bar__user-menu-toggle img,
.top-bar__search-toggle svg {
  margin-right: 0;
}
.top-bar__login {
  margin-left: 1em;
  margin-right: 1em;
}
</style>
