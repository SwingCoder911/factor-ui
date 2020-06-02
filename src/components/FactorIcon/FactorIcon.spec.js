import { mount } from '@vue/test-utils';
import FactorIcon from './FactorIcon.vue';
import { id, width, height } from '../../test/mocks/iconPropsMock';

describe('FactorIcon', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(FactorIcon, {
      propsData: {
        id,
        width,
        height,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('receives id', () => {
    const testText = 'testid';
    const wrapper = mount(FactorIcon, {
      propsData: {
        id: testText,
        width,
        height,
      },
    });
    expect(wrapper.vm.$props.id).toEqual(testText);
  });

  it('receives width', () => {
    const testWidth = 7;
    const wrapper = mount(FactorIcon, {
      propsData: {
        id,
        width: testWidth,
        height,
      },
    });
    expect(wrapper.vm.$props.width).toEqual(testWidth);
  });

  it('receives height', () => {
    const testHeight = 7;
    const wrapper = mount(FactorIcon, {
      propsData: {
        id,
        width,
        height: testHeight,
      },
    });
    expect(wrapper.vm.$props.height).toEqual(testHeight);
  });
});
