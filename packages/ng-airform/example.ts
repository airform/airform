import angular from 'angular'
import './'

angular.module('root', ['ngAirform']).component('root', {
  template: `
    <airform email="your@email.com">
      <input type="text" name="name" />
      <textarea name="message"></textarea>
      <button>Send</button>
    </airform>
  `,
  require: '^airform',
})
