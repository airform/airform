// This is needed to import all of Ember
import 'ember-source/dist/ember.prod'
import { compile } from 'ember-source/dist/ember-template-compiler'

Ember.TEMPLATES['application'] = compile(`
  <h2 class="my-thing">Hello World</h2>
  {{user-list users=this.model.results}}
`)

const ApplicationRoute = Ember.Route.extend({
  model() {
    return fetch('https://randomuser.me/api?results=10')
      .then(r => r.json())
  }
})

const UserListComponent = Ember.Component.extend({
  layout: compile(`
    <ul>
      {{#each users as |user|}}
        <li>{{user.name.last}}, {{user.name.first}}</li>
      {{/each}}
    </ul>
  `),
})


// example.ts
let App = Ember.Application.extend({
  modulePrefix: 'my-app',
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
})
let app = new App()

app.ApplicationRoute = ApplicationRoute
app.UserListComponent = UserListComponent
