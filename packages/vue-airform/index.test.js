import { shallowMount } from '@vue/test-utils'
import Airform from './index'

describe('Airform', () => {
  it('renders without crashing', () => {
    const email = 'your@email.com'
    const wrapper = shallowMount(Airform, {
      propsData: { email },
    })
    expect(wrapper.text()).toMatch(email)
  })
})
