<template>
  <div :class="[{ 'user-picture': true, identicon }, modifier]">
    <img
      v-if="src"
      ref="img"
      :class="imageClass"
      :src="src"
      alt=""
      :width="size"
      role="presentation"
      aria-hidden="true"
    />
    <FactorIcon
      v-if="showStaffIcon"
      :width="8"
      :height="8"
      class="staff-icon"
      id="mozilla-m"
    />
  </div>
</template>

<script>
import { avatarUrl, generateIdenticon } from '@/shared/utils/avatars';
import { FactorIcon } from '@/components';

export default {
  name: 'FactorUserPicture',
  props: {
    avatar: {
      type: Object,
      default: () => {
        return { picture: '', username: 'dino' };
      },
    },
    ownPicture: {
      type: Boolean,
      default: false,
    },
    size: Number,
    imageClass: String,
    pictureSize: Number,
    showStaffIcon: Boolean,
  },
  components: {
    FactorIcon,
  },
  watch: {
    size() {
      this.updateSize();
    },
    avatar() {
      this.updateUserPicture();
    },
  },
  methods: {
    updateSize() {
      if (this.size <= 40) {
        this.iconSize = 'small';
        this.slot = 40;
      } else if (this.size <= 100) {
        this.iconSize = 'medium';
        this.slot = 100;
      } else {
        this.iconSize = 'large';
        this.slot = 264;
      }
      this.slot = this.pictureSize || this.slot;
      this.modifier = `user-picture--${this.iconSize}`;
    },
    updateUserPicture() {
      this.updateSize();
      if (
        this.avatar.picture === null ||
        this.avatar.picture === '' ||
        this.avatar.picture === 'default:' ||
        this.avatar.picture.startsWith('https://s3.amazonaws.com/')
      ) {
        this.identicon = true;
        generateIdenticon(this.avatar.username, this.size).then((i) => {
          this.src = i;
        });
      } else {
        this.identicon = false;
        if (this.avatar.picture === 'empty:') {
          this.src = '';
        } else if (
          this.avatar.picture &&
          this.avatar.picture.startsWith('data:')
        ) {
          this.src = this.avatar.picture;
        } else {
          this.src = avatarUrl(this.avatar.picture, this.slot, this.ownPicture);
        }
      }
    },
  },
  created() {
    this.updateUserPicture();
  },
  data() {
    return {
      src: '',
      iconSize: 'small',
      slot: 40,
      class: 'user-picture--40',
      modifier: '',
      identicon: true,
    };
  },
};
</script>

<style lang="scss">
.user-picture {
  position: relative;
}
.user-picture img {
  border-radius: var(--imageRadius);
  max-height: 100%;
}
@supports (object-fit: cover) {
  .user-picture img {
    width: 100%;
    height: 100%;
    max-height: none;
    object-fit: cover;
  }
}
.user-picture .staff-icon {
  position: absolute;
  right: 0;
  bottom: 0;
}
.user-picture--small {
  width: 2.85em;
  height: 2.85em;
}
.user-picture--small .staff-icon {
  width: 1em;
  height: 1em;
}
.user-picture--medium {
  width: 6.25em;
  height: 6.25em;
}
.user-picture--medium .staff-icon {
  width: 2em;
  height: 2em;
}
.user-picture--large /* the 'large' UserPicture is actually medium on small screens */ {
  width: 6.25em;
  height: 6.25em;
}
.user-picture--large .staff-icon {
  width: 2em;
  height: 2em;
}
@media (min-width: 57.5em) {
  .user-picture--large {
    width: 18.75em;
    height: 18.75em;
  }
  .user-picture--large .staff-icon {
    width: 5em;
    height: 5em;
  }
}
</style>
