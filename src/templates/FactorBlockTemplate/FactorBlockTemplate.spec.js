import { mount } from '@vue/test-utils';
import { searchBarConfig } from '../../test/mocks/templatePropsMocks';
import FactorBlockTemplate from './FactorBlockTemplate.vue';

describe('FactorBlockTemplate', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorBlockTemplate, {
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives searchBarLabel', () => {
    const testText = 'searchBarLabel';
    const wrapper = mount(FactorBlockTemplate, {
      propsData: {
        searchBarConfig: {
          ...searchBarConfig,
          label: testText,
        },
      },
    });
    expect(wrapper.vm.$props.searchBarConfig.label).toEqual(testText);
  });

  it('receives searchBarHandler', () => {
    const testFunc = (value) => value;
    const wrapper = mount(FactorBlockTemplate, {
      propsData: {
        searchBarConfig: {
          ...searchBarConfig,
          handler: testFunc,
        },
      },
    });
    expect(wrapper.vm.$props.searchBarConfig.handler(7)).toEqual(7);
  });

  it('receives slot logo', () => {
    const testSrc = `https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg`;
    const wrapper = mount(FactorBlockTemplate, {
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
    const wrapper = mount(FactorBlockTemplate, {
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
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        profile: `<p>profile</p>`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.profile[0].children[0].text).toEqual('profile');
  });

  it('receives slot main', () => {
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        main: `<p>main</p>`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.main[0].children[0].text).toEqual('main');
  });

  it('receives slot footerLinks', () => {
    const wrapper = mount(FactorBlockTemplate, {
      slots: {
        footerLinks: `<p>footerLinks</p>`,
      },
      propsData: {
        searchBarConfig,
      },
    });
    expect(wrapper.vm.$slots.footerLinks[0].children[0].text).toEqual(
      'footerLinks',
    );
  });
});
