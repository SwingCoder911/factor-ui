import { mount } from '@vue/test-utils';
import FactorSearchBar from './FactorSearchBar.vue';
import {
  searchBarHandler,
  searchBarLabel,
  searchBarValue,
  searchBarDropdown,
} from '../../test/mocks/searchBarPropsMock';

describe('FactorSearchBar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        searchBarHandler,
        searchBarLabel,
        searchBarValue,
        searchBarDropdown,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarHandler', () => {
    const searchBarHandlerTest = (input) => input;
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        searchBarHandler: searchBarHandlerTest,
        searchBarLabel,
        searchBarValue,
        searchBarDropdown,
      },
    });
    expect(wrapper.vm.$props.searchBarHandler(7)).toEqual(7);
  });

  it('receives searchBarLabel', () => {
    const searchBarLabelTest = 'test';
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        searchBarHandler,
        searchBarLabel: searchBarLabelTest,
        searchBarValue,
        searchBarDropdown,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(searchBarLabelTest);
  });

  it('receives searchBarValue', () => {
    const searchBarValueTest = 'test';
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        searchBarHandler,
        searchBarLabel,
        searchBarValue: searchBarValueTest,
        searchBarDropdown,
      },
    });
    expect(wrapper.vm.$props.searchBarValue).toEqual(searchBarValueTest);
  });

  it('receives searchBarDropdown', () => {
    const searchBarDropdownTest = ['test'];
    const wrapper = mount(FactorSearchBar, {
      propsData: {
        searchBarHandler,
        searchBarLabel,
        searchBarValue,
        searchBarDropdown: searchBarDropdownTest,
      },
    });
    expect(wrapper.vm.$props.searchBarDropdown[0]).toEqual(
      searchBarDropdownTest[0],
    );
  });
});
