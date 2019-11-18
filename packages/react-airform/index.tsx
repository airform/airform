import * as React from 'react'

type AirformInterface = {
  email?: string
} & Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<keyof React.FormHTMLAttributes<HTMLFormElement>, 'action' | 'method'>
>

type FormProps = React.ComponentPropsWithoutRef<'form'>

const Airform = React.forwardRef<HTMLFormElement, FormProps>(
  (props: AirformInterface, ref) => (
    <form
      {...props}
      action={`https://airform.io/${props.email || ''}`}
      ref={ref}
      method="post"
    />
  ),
)

Airform.displayName = 'Airform'

export default Airform
