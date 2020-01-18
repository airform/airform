// This is needed to import all of Ember
import 'ember-source/dist/ember.prod'
import { compile } from 'ember-source/dist/ember-template-compiler'
import Airform from './'

Ember.TEMPLATES['application'] = compile(`
  <Airform @email="cjpatoilo@gmail.com">
    <input type="text" name="name" />
    <textarea name="message"></textarea>
    <button>Send</button>
  </Airform>
`)

let App = Ember.Application.extend({
  modulePrefix: 'root',
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
})
let app = new App()

app.Airform = Airform
