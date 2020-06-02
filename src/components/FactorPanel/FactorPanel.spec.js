import { mount } from '@vue/test-utils';
import FactorPanel from './FactorPanel.vue';
import {
  fullContent,
  fullOnMobile,
  title,
  hideContent,
} from '../../test/mocks/panelPropsMock';

describe('FactorPanel', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorPanel, {
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives fullContent', () => {
    const wrapper = mount(FactorPanel, {
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$props.fullContent).toEqual(fullContent);
  });

  it('receives fullOnMobile', () => {
    const wrapper = mount(FactorPanel, {
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$props.fullOnMobile).toEqual(fullOnMobile);
  });

  it('receives title', () => {
    const wrapper = mount(FactorPanel, {
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$props.title).toEqual(title);
  });

  it('receives hideContent', () => {
    const wrapper = mount(FactorPanel, {
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$props.hideContent).toEqual(hideContent);
  });

  it('receives slot header', () => {
    const wrapper = mount(FactorPanel, {
      slots: {
        header: `<h3>header</h3>`,
      },
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$slots.header[0].children[0].text).toEqual('header');
  });

  it('receives slot content', () => {
    const wrapper = mount(FactorPanel, {
      slots: {
        content: `<p>content</p>`,
      },
      propsData: {
        fullContent,
        fullOnMobile,
        title,
        hideContent,
      },
    });
    expect(wrapper.vm.$slots.content[0].children[0].text).toEqual('content');
  });
});
