<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0; height: 0"
      v-html="iconRendered"
    ></svg>
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      :width="width"
      :height="height"
      class="icon"
      @click="handleIconClicked"
    >
      <use :href="iconHref"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FactorIcon',
  props: {
    width: {
      type: Number,
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
    },
    id: String,
  },
  computed: {
    iconRendered() {
      return this.source.default.stringify();
    },
    iconHref() {
      return `#${this.source.default.id}`;
    },

    iconSource() {
      return this.source.default.content;
    },
  },
  methods: {
    handleIconClicked(e) {
      this.$emit('click', e);
    },
  },
  data() {
    return {
      avatarUrl: null,
      source: require(`@/assets/svg/${this.id}.svg`),
    };
  },
};
</script>

<style lang="scss">
@import '../../shared/styles/_base.scss';
@import '../../shared/styles/_variables.scss';

.icon {
  fill: currentColor;
}
</style>
