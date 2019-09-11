
import { shallowMount } from '@vue/test-utils'
import VueFixedRatio from './vue-fixed-ratio.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueFixedRatio)
  expect(wrapper.exists()).toBe(true)
})
