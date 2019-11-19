import Vue from 'vue'
import Airform from './'

new Vue({
  el: '#root',
  components: { Airform },
  template: `
    <Airform email="cjpatoilo@gmail.com">
      <input type="text" name="name" />
      <textarea name="message" />
      <button>Send</button>
    </Airform>
  `,
})
