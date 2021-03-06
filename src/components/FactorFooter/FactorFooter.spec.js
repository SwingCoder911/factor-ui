import { mount } from '@vue/test-utils';
import FactorFooter from './FactorFooter.vue';

describe('FactorFooter', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorFooter);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorFooter, {
      slots: {
        ['links']: `<p>links</p>`,
      },
    });
    expect(wrapper.vm.$slots['links'][0].children[0].text).toEqual('links');
  });
});
