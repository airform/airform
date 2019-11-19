import Vue from 'vue'
import Airform from './index.vue'

const App = () =>
  Vue.extend({
    components: { Airform },
    template: `
      <div>TESTE</div>
      <Airform :email="your@email.com">
        <input type="text" name="name" placeholder="Enter your name" />
        <textarea name="message" placeholder="Enter your message" />
        <button>Send</button>
      </Airform>
    `
  })

new Vue({
  render: createElement => createElement(App),
}).$mount('#root')
