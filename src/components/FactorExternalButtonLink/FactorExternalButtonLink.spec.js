import { mount } from '@vue/test-utils';
import FactorExternalButtonLink from './FactorExternalButtonLink.vue';

describe('FactorExternalButtonLink', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorExternalButtonLink, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
