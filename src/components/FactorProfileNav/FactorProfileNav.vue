<template>
  <div class="f-pn">
    <template v-if="showMenu">
      <FactorShowMore
        :buttonText="getComponentText('buttonText')"
        :alternateButtonText="getComponentText('alternateButton')"
        buttonClass="top-bar__user-menu-toggle"
        :closeWhenClickedOutside="true"
        :buttonTextVisuallyHidden="true"
      >
        <template slot="overflow">
          <FactorUserMenu
            :avatar="avatar"
            :loginLink="loginLink"
            :strings="strings"
          ></FactorUserMenu>
        </template>
        <template slot="button-content">
          <FactorUserPicture
            v-if="avatar.loaded"
            :avatar="{
              picture: avatar.imageUrl,
              username: avatar.username,
            }"
            :size="40"
            :pictureSize="100"
            :showStaffIcon="avatar.isStaff"
          ></FactorUserPicture>
          <FactorUserPicture
            v-else
            :size="40"
            :pictureSize="100"
            :showStaffIcon="avatar.isStaff"
          ></FactorUserPicture>
        </template>
      </FactorShowMore>
    </template>
    <FactorExternalButtonLink
      v-else
      :href="loginLink"
      class="top-bar__login"
      iconRight="chevron-right"
      :text="getComponentText('loginText')"
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
  name: 'FactorProfileNav',
  components: {
    FactorShowMore,
    FactorUserMenu,
    FactorUserPicture,
    FactorExternalButtonLink,
  },
  props: {
    loginLink: String,
    avatar: {
      type: Object,
      default: () => ({
        imageUrl: '',
        username: '',
        isStaff: false,
        loaded: false,
        firstName: '',
        lastName: '',
        primaryEmail: '',
      }),
    },
    strings: {
      type: Object,
      default: () => ({
        buttonText: '',
        alternateButtonText: '',
        loginText: '',
        closeMenuHidden: '',
        userMenuMyProfile: '',
        userMenuDashboard: '',
        userMenuNotifications: '',
        userMenuLogout: '',
      }),
    },
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getComponentText(field) {
      return getStrings(this.strings, field);
    },
  },
  computed: {},
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
