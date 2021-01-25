import { compile } from 'ember-source/dist/ember-template-compiler'

export default Ember.Component.extend({
  layout: compile(`
    <form action="https://airform.io/{{email}}" method="post">
      {{yield}}
    </form>
  `),
})

// export default Ember.Component.extend({
//   tagName: 'form',
//   attributeBindings: ['email:action'],
//   email: 'https://airform.io/your@email.com'
// })
