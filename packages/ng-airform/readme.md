<a align="center" href="https://github.com/airform/airform"><img width="100%" src="https://repository-images.githubusercontent.com/129330207/bb063280-031a-11ea-84bc-ecf928314143" alt="Airform - Functional HTML forms for AngularJS Developers."></a>

> Functional HTML forms for AngularJS Developers.

## Why it's awesome

What if you could use a service that gives you full control over the form, yet doesn’t require you to use anything on your server? Airform gives you the ability to create functional HTML forms without thinking about servers.

## Getting Started

**Install with npm**

```
$ npm install ng-airform
```

**Install with Yarn**

```
$ yarn add ng-airform
```

**Install with Bower**

```
$ bower install ng-airform
```

## Usage

```js
import angular from 'angular'
import airform from 'ng-airform'

angular
  .module('myApp', ['ngAirform'])
  .component('myComponent', {
    template: `
      <airform email="your@email.com">
        <input name="name" type="text"/>
        <textarea name="message"></textarea>
        <button>Send</button>
      </airform>
    `,
    require: '^airform',
  })
```

**Quick Tip:** The `email` attribute defines the email that will receive the form's collected data when it is submitted. The `method` attribute is `post` by default. All `input`, `select`, `textarea` elements whitin your form should have a `name` attribute.

## Features

- No Server Management
- Automated High Availability
- Zero-Configuration
- Safe Ship Mode
- Unlimited Form Submissions
- Cross-Platform Support
- More Productivity
- Web Standards
- Open Source

## Extensions

- [Functional HTML forms for Angular Developers](https://github.com/airform/airform/tree/master/packages/angular-airform)
- [Functional HTML forms for AngularJS Developers](https://github.com/airform/airform/tree/master/packages/ng-airform)
- [Functional HTML forms for Aurelia Developers](https://github.com/airform/airform/tree/master/packages/aurelia-airform)
- [Functional HTML forms for React Developers](https://github.com/airform/airform/tree/master/packages/react-airform)
- [Functional HTML forms for Vue Developers](https://github.com/airform/airform/tree/master/packages/vue-airform)

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/airform/airform/contribute).

## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Released under [MIT License](https://cjpatoilo.com/license).
