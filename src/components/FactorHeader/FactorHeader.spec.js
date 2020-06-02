import { mount } from '@vue/test-utils';
import FactorHeader from './FactorHeader.vue';
import {
  hideSearchBar,
  noLogo,
  searchBarConfig,
} from '../../test/mocks/headerPropsMock';

describe('FactorHeader', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorHeader, {
      propsData: {
        searchBarConfig,
        hideSearchBar,
        noLogo,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarConfig', () => {
    const testText = 'searchBarLabel';
    const wrapper = mount(FactorHeader, {
      propsData: {
        searchBarConfig: {
          ...searchBarConfig,
          label: testText,
        },
        hideSearchBar,
        noLogo,
      },
    });
    expect(wrapper.vm.$props.searchBarConfig.label).toEqual(testText);
  });

  it('receives hideSearchBar', () => {
    const wrapper = mount(FactorHeader, {
      propsData: {
        searchBarConfig,
        hideSearchBar,
        noLogo,
      },
    });
    expect(wrapper.vm.$props.hideSearchBar).toEqual(hideSearchBar);
  });

  it('receives noLogo', () => {
    const wrapper = mount(FactorHeader, {
      propsData: {
        searchBarConfig,
        hideSearchBar,
        noLogo,
      },
    });
    expect(wrapper.vm.$props.noLogo).toEqual(noLogo);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorHeader, {
      slots: {
        logo: `<img src='${testSrc}' />`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.logo[0].data.attrs.src).toEqual(testSrc);
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorHeader, {
      slots: {
        nav: `<p>nav</p>`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.nav[0].children[0].text).toEqual('nav');
  });

  it('receives slot profile', () => {
    const wrapper = mount(FactorHeader, {
      slots: {
        profile: `<p>profile</p>`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });
});
