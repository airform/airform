import Vue from 'vue'

type AirformInterface = {
  email?: string
} & Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<keyof React.FormHTMLAttributes<HTMLFormElement>, 'action' | 'method'>
>

export default <AirformInterface>Vue.extend({
  name: 'airform',
  props: {
    email: {
      type: String,
      default: 'your@email.com',
    },
  },
  template: `
    <form :action="'https://airform.io/' + email" method="post">
      <slot />
    </form>
  `,
})
