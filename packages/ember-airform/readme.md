<a align="center" href="https://github.com/airform/airform"><img width="100%" src="https://repository-images.githubusercontent.com/129330207/bb063280-031a-11ea-84bc-ecf928314143" alt="Airform - Functional HTML forms for Ember Developers."></a>

> Functional HTML forms for Ember Developers.

## Why it's awesome

What if you could use a service that gives you full control over the form, yet doesn’t require you to use anything on your server? Airform gives you the ability to create functional HTML forms without thinking about servers.

## Usage

```jsx
import airform from 'ember-airform'

<airform email="your@email.com">
  <input type="text" name="name" />
  <textarea name="message"></textarea>
  <button>Send</button>
</airform>
```

**Quick Tip:** The `email` attribute defines the email that will receive the form's collected data when it is submitted. The `method` attribute is `post` by default. All `input`, `select`, `textarea` elements whitin your form should have a `name` attribute.

## Features

- No Server Management
- Automated High Availabilty
- Zero-Configuration
- Safe Ship Mode
- Unlimited Form Submissions
- Cross Platform Support
- More Productivity
- Web Standards
- Open Source

## Packages

- [Angular Component](https://github.com/airform/airform/tree/master/packages/angular-airform)
- [AngularJS Component](https://github.com/airform/airform/tree/master/packages/ng-airform)
- [Aurelia Component](https://github.com/airform/airform/tree/master/packages/aurelia-airform)
- [React Component](https://github.com/airform/airform/tree/master/packages/react-airform)
- [Vue Component](https://github.com/airform/airform/tree/master/packages/vue-airform)

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/airform/airform/contribute).

## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Released under [MIT License](https://cjpatoilo.com/license).
