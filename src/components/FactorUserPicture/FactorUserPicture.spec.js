import { mount } from '@vue/test-utils';
import FactorUserPicture from './FactorUserPicture.vue';

describe('FactorUserPicture', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorUserPicture, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
