<template>
  <img src="@/assets/svg/mozilla-m.svg" class="dino-type" :alt="altText" />
</template>
<script>
export default {
  props: {
    altText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.dino-type {
  background-color: var(--black);
  color: var(--white);
}
</style>
