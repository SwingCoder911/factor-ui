import { mount } from '@vue/test-utils';
import FactorHeader from './FactorHeader.vue';
import {
  hideSearchBar,
  noLogo,
  searchBarLabel,
  searchBarValue,
} from '../../test/mocks/headerPropsMock';

const defaultProps = {
  searchBarLabel,
  searchBarValue,
  hideSearchBar,
  noLogo,
};

describe('FactorHeader', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorHeader, {
      propsData: defaultProps,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarConfig', () => {
    const testText = 'searchBarLabel';
    const wrapper = mount(FactorHeader, {
      propsData: {
        ...defaultProps,
        searchBarLabel: testText,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(testText);
  });

  it('receives hideSearchBar', () => {
    const testHide = !hideSearchBar;
    const wrapper = mount(FactorHeader, {
      propsData: {
        ...defaultProps,
        hideSearchBar: testHide,
      },
    });
    expect(wrapper.vm.$props.hideSearchBar).toEqual(testHide);
  });

  it('receives noLogo', () => {
    const testNoLogo = !noLogo;
    const wrapper = mount(FactorHeader, {
      propsData: {
        ...defaultProps,
        noLogo: testNoLogo,
      },
    });
    expect(wrapper.vm.$props.noLogo).toEqual(testNoLogo);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorHeader, {
      slots: {
        logo: `<img src='${testSrc}' />`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.logo[0].data.attrs.src).toEqual(testSrc);
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorHeader, {
      slots: {
        nav: `<p>nav</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.nav[0].children[0].text).toEqual('nav');
  });

  it('receives slot profile', () => {
    const wrapper = mount(FactorHeader, {
      slots: {
        profile: `<p>profile</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });
});
