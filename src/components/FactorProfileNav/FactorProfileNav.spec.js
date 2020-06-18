import { mount } from '@vue/test-utils';
import FactorProfileNav from './FactorProfileNav.vue';

describe('FactorProfileNav', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorProfileNav, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
