<template>
  <div class="profile-example" slot="profile">
    <FactorProfileNav
      :loginLink="loginLink"
      :avatar="avatar"
      :strings="strings"
      :showMenu="showMenu"
    />
  </div>
</template>
<script>
import { FactorProfileNav } from '@/components';
export default {
  name: 'ProfileExample',
  components: { FactorProfileNav },
  data: () => ({
    loginLink: '',
    avatar: {
      imageUrl:
        'https://people.mozilla.org/avatar/get/id/ZDY0NThmYWFlODkzNDdmYTMxNWM2YjNjNWI2NTc0MDA3OGY3MDNiMWEwOThkM2MzNWMxNWZlYmMxMzBhNTVkYiNwdWJsaWMjMTU2ODYyNzAyNA.png?size=100&own=true',
      username: 'batman',
      isStaff: true,
      loaded: true,
      firstName: 'Bruce',
      lastName: 'Wayne',
      primaryEmail: 'batman@gotham.com',
    },
    strings: {
      buttonText: 'Login',
      alternateButtonText: 'Login',
      loginText: 'Login',
      closeMenuHidden: 'close',
      userMenuMyProfile: 'My Profile',
      userMenuDashboard: 'Dashboard',
      userMenuNotifications: 'Notifications',
      userMenuLogout: 'Logout',
    },
    showMenu: true,
  }),
};
</script>
<style lang="scss" scoped>
.profile-example {
  height: calc(100% - 2em);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & #{&}__image {
    display: block;
    height: 100%;
    max-width: 100%;
  }
}
</style>
