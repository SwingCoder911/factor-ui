<template>
  <div class="user-menu" ref="userMenuEl">
    <div class="user-menu__header">
      <button class="user-menu__close-avatar" type="button">
        <span class="visually-hidden">{{
          getComponentText('closeMenuHidden')
        }}</span>
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
      </button>
      <div class="user-menu__name">
        <!-- TODO: fix the url for this -->
        <!-- <RouterLink
          v-if="avatar.loaded"
          :to="{
            name: 'Profile',
            params: { username: avatar.username },
          }"
        > -->
        <span class="user-menu__header-name"
          >{{ avatar.firstName }} {{ avatar.lastName }}</span
        >
        <span class="user-menu__header-email">{{ avatar.primaryEmail }}</span>
      </div>
      <button
        class="user-menu__close-button"
        id="user-menu-close-button"
        type="button"
      >
        <FactorIcon id="x" :width="24" :height="24" />
      </button>
    </div>
    <ul class="user-menu__items">
      <li v-for="(linkItem, idx) in menuItems" :key="idx">
        <a v-if="linkItem.hasOwnProperty('link')" :href="linkItem.link">
          <span>{{ linkItem.text }}</span>
          <FactorIcon :id="linkItem.icon" :width="24" :height="24" />
        </a>
        <a v-else :href="linkItem.url">
          <span>{{ linkItem.text }}</span>
          <FactorIcon :id="linkItem.icon" :width="24" :height="24" />
        </a>
      </li>
    </ul>
    <a href="" class="user-menu__log-out">
      <span>{{ getComponentText('userMenuLogout') }}</span>
      <FactorIcon id="log-out" :width="24" :height="24" />
    </a>
  </div>
</template>

<script>
import { getStrings } from '@/shared/utils/stringUtils';
import { FactorModal, FactorIcon, FactorUserPicture } from '@/components';

export default {
  name: 'FactorUserMenu',
  props: {
    strings: {
      type: Object,
      default: () => ({
        closeMenuHidden: '',
        userMenuMyProfile: '',
        userMenuDashboard: '',
        userMenuNotifications: '',
        userMenuLogout: '',
      }),
    },
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
  },
  mounted() {
    if (matchMedia('(min-width: 50em)').matches === false) {
      FactorModal.methods.preventBackgroundScrolling();
    }
  },
  destroyed() {
    if (matchMedia('(min-width: 50em)').matches === false) {
      FactorModal.methods.enableBackgroundScrolling();
    }
  },
  components: {
    FactorIcon,
    FactorUserPicture,
  },
  computed: {
    menuItems() {
      let menuItemSet = !this.avatar.loaded
        ? []
        : [
            {
              link: {
                name: 'Profile',
                params: { username: this.avatar.primaryEmail },
              },
              text: this.getComponentText('userMenuMyProfile'),
              icon: 'user',
            },
          ];
      menuItemSet = menuItemSet.concat([
        {
          url: 'https://sso.mozilla.com',
          text: this.getComponentText('userMenuDashboard'),
          icon: 'dashboard',
        },
        {
          url: 'https://sso.mozilla.com/notifications',
          text: this.getComponentText('userMenuNotifications'),
          icon: 'dashboard',
        },
      ]);
      return menuItemSet;
    },
  },
  methods: {
    getComponentText(field) {
      return getStrings(this.strings, field);
    },
  },
};
</script>

<style lang="scss">
.user-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--black);
  color: var(--white);
  z-index: var(--layerUserMenu);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto; /* have scrollbar when needed */
}
@media (min-width: 30em) {
  .user-menu {
    position: absolute;
    left: auto;
    height: auto;
  }
}
.user-menu__header a {
  display: block;
}
.user-menu a {
  color: var(--white);
  text-decoration: none;
  margin: 0 2px;
}
.user-menu a:hover {
  color: var(--white);
}
a.user-menu__log-out,
.user-menu__items a,
.user-menu__faux-link {
  display: flex;
  padding: 1em 1.75em;
}
.focus-styles .user-menu a:focus,
.focus-styles .user-menu button:focus {
  box-shadow: 0px 0 0 1px var(--white), 0 0 0 3px var(--transparentWhite);
}
a.user-menu__log-out svg,
.user-menu__items a svg,
.user-menu__faux-link svg {
  margin-left: auto;
}
.user-menu__faux-link {
  color: var(--gray-50);
  cursor: not-allowed;
}
.user-menu__header {
  padding: 1.5em 1.75em; /* :'( */
  border-bottom: 1px solid var(--gray-50);
  display: flex;
  position: relative;
  flex: none;
  align-items: center;
}
.user-menu__close-avatar,
.user-menu__close-button {
  border: 0;
  background: transparent;
  color: var(--white);
  border: 1px dotted transparent;
  padding: 0;
}
.focus-styles .user-menu__close-avatar:focus,
.focus-styles .user-menu__close-button:focus {
  border: 1px dotted currentColor;
}
.user-menu__close-avatar {
  margin-right: 1em;
  font-size: 1em;
}
.user-menu__close-button {
  margin-left: auto;
}
.user-menu__close-button:hover {
  color: var(--gray-40);
}
.user-menu__close-button svg {
  vertical-align: middle;
}
.user-menu__log-out {
  border-top: 1px solid var(--gray-50);
  margin-top: auto; /* works because it is a flex item in a flex container */
}
.user-menu__header-name,
.user-menu__header-email,
.user-menu a span {
  margin-right: 2em;
  max-width: 12em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.user-menu__header-email {
  color: var(--gray-40);
}
.user-menu__items {
  padding: 0;
  margin: auto 0;
}
@media (min-width: 30em) {
  .user-menu__items {
    margin: 2em 0;
  }
}
a.user-menu__log-out:hover,
.user-menu__items a:hover {
  color: var(--gray-40);
}
.user-menu__items li {
  list-style: none;
  padding: 0.125em;
}
</style>
