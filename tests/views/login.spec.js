//import flushPromises from 'flush-promises'
import {mount} from '@vue/test-utils'
import Login from '@/views/Login.vue'
// 导入store
import store from "@/store/index"
// 完整导入Antd组件库
import Antd from 'ant-design-vue';

describe('Login.spec.js', (done) => {
  it('renders', async () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [store, Antd]
      }
    })

    const inputs = wrapper.findAll('input');
    await inputs[0].setValue("admin");
    await inputs[1].setValue("admin")
    await wrapper.find('button').trigger('click');

    // Wait until the DOM updates.
    // await flushPromises()
    
    setTimeout(() => {
      const p = wrapper.find(".realname")
      expect(p.text().length).equal(2)
    }, 1000)
  })
})