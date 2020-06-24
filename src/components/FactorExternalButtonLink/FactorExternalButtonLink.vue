<template>
  <a class="button button--link" :href="href">
    <FactorIcon v-if="iconLeft" :id="iconLeft" :width="24" :height="24" />
    <span v-if="text">{{ text }}</span>
    <FactorIcon v-if="iconRight" :id="iconRight" :width="24" :height="24" />
  </a>
</template>

<script>
import FactorIcon from '@/components/FactorIcon/FactorIcon';

export default {
  name: 'FactorExternalButtonLink',
  components: { FactorIcon },
  props: {
    href: String,
    text: String,
    iconLeft: String,
    iconRight: String,
  },
};
</script>

<style lang="scss">
/* Adjust button style to have a link with optional icons as an external link. */
.button--link {
  width: max-content;
  height: max-content;
  display: inline-flex;
}
.button--link > svg + span {
  margin-left: 0.5em;
}
.button--link > span + svg {
  margin-left: 0.5em;
}
.button--link > svg {
  margin-right: 0;
}
</style>
