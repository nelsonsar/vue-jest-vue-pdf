import { mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import MyPDF from '@/components/MyPDF'

describe('HelloWorld.vue', () => {
  it('it mounts', () => {
    const localVue = createLocalVue
    localVue.component('my-pdf', MyPDF)
    const wrapper = mount(HelloWorld)
    expect(wrapper.exists()).toBe(true)
  })
})
