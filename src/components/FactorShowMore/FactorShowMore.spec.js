import { mount } from '@vue/test-utils';
import FactorShowMore from './FactorShowMore.vue';

describe('FactorShowMore', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorShowMore, {
      propsData: {},
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
