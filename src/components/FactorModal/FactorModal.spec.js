import { mount } from '@vue/test-utils';
import FactorModal from './FactorModal.vue';

describe('FactorModal', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorModal, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
