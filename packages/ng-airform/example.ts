import angular from 'angular'
import './'

angular.module('myApp', ['ngAirform']).component('myComponent', {
  template: `
    <airform email="your@email.com">
      <input type="text" name="name" />
      <textarea name="message"></textarea>
      <button>Send</button>
    </airform>
  `,
  require: '^airform',
})
