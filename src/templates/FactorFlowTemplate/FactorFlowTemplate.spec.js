import { mount } from '@vue/test-utils';
import FactorFlowTemplate from './FactorFlowTemplate.vue';

const defaultProps = {
  searchBarLabel: '',
  searchBarValue: '',
};

describe('FactorFlowTemplate', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorFlowTemplate, {
      propsData: defaultProps,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarLabel', () => {
    const testText = 'testText';
    const wrapper = mount(FactorFlowTemplate, {
      propsData: {
        ...defaultProps,
        searchBarLabel: testText,
      },
    });
    expect(wrapper.vm.$props.searchBarLabel).toEqual(testText);
  });

  it('receives searchBarValue', () => {
    const testValue = 'testValue';
    const wrapper = mount(FactorFlowTemplate, {
      propsData: {
        ...defaultProps,
        searchBarValue: testValue,
      },
    });
    expect(wrapper.vm.$props.searchBarValue).toEqual(testValue);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorFlowTemplate, {
      slots: {
        logo: `<img src='${testSrc}' />`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.logo[0].data.attrs.src).toEqual(testSrc);
  });

  it('receives slot nav', () => {
    const wrapper = mount(FactorFlowTemplate, {
      slots: {
        nav: `<p>nav</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.nav[0].children[0].text).toEqual('nav');
  });

  it('receives slot profile', () => {
    const wrapper = mount(FactorFlowTemplate, {
      slots: {
        profile: `<p>profile</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });

  it('receives slot main', () => {
    const wrapper = mount(FactorFlowTemplate, {
      slots: {
        main: `<p>main</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.main[0].children[0].text).toEqual('main');
  });

  it('receives slot footerLinks', () => {
    const wrapper = mount(FactorFlowTemplate, {
      slots: {
        footerLinks: `<p>footerLinks</p>`,
      },
      propsData: defaultProps,
    });
    expect(wrapper.vm.$slots.footerLinks[0].children[0].text).toEqual(
      'footerLinks',
    );
  });
});
