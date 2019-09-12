
import { shallowMount } from '@vue/test-utils'
import VueFixedRatio from './vue-fixed-ratio.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueFixedRatio, {
    propsData: {
      width: 20,
      height: 10,
    },
  })
  expect(wrapper.exists()).toBe(true)
})

test('Calculates correct ratio', () => {
  const width = 20
  const height = 10
  const expectedRatio = (height / width) * 100
  const wrapper = shallowMount(VueFixedRatio, {
    propsData: {
      width,
      height,
    },
  })

  expect(wrapper.vm.ratio).toBe(expectedRatio)
})

test('Adds correct styling', () => {
  const width = 20
  const height = 10
  const expectedRatio = (height / width) * 100
  const wrapper = shallowMount(VueFixedRatio, {
    propsData: {
      width,
      height,
    },
  })

  const elStyles = wrapper.find('.vue-fixed-ratio').vm.$el.getAttribute('style')

  expect(elStyles).toContain(`padding-bottom: ${expectedRatio}%;`)
})
