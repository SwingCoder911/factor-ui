import { mount } from '@vue/test-utils';
import FactorSearchBar from './FactorSearchBar.vue';
import {
  searchBarLabel,
  searchBarValue,
} from '../../test/mocks/searchBarPropsMock';

const defaultProps = {
  searchBarLabel,
  searchBarValue,
};

describe('FactorSearchBar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorSearchBar, {
      propsData: defaultProps,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarLabel', () => {
    const searchBarLabelTest = 'test';
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        ...defaultProps,
        searchBarLabel: searchBarLabelTest,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(searchBarLabelTest);
  });

  it('receives searchBarValue', () => {
    const searchBarValueTest = 'test';
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        ...defaultProps,
        searchBarValue: searchBarValueTest,
      },
    });
    expect(wrapper.vm.$props.searchBarValue).toEqual(searchBarValueTest);
  });
});
