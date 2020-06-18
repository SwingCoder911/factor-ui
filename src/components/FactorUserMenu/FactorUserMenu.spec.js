import { mount } from '@vue/test-utils';
import FactorUserMenu from './FactorUserMenu.vue';

describe('FactorUserMenu', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorUserMenu, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
