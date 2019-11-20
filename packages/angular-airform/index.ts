import { Component, Input } from '@angular/core'

// export type AirformInterface = {
//   email?: string
// } & Pick<
//   Angular.FormHTMLAttributes<HTMLFormElement>,
//   Angular.FormHTMLAttributes<HTMLFormElement>, 'action' | 'method'>
// >

@Component({
  selector: 'airform',
  template: `
    <form [action]="'https://airform.io/' + email" method="post">
      <ng-content></ng-content>
    </form>
  `,
})
export class AirformComponent {
  @Input()
  email: String = 'your@gmail.com'
}
