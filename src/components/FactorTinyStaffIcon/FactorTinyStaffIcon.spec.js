import { mount } from '@vue/test-utils';
import FactorTinyStaffIcon from './FactorTinyStaffIcon.vue';

describe('FactorTinyStaffIcon', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorTinyStaffIcon, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
