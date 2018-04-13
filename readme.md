<a align="center" href="https://github.com/airform/airform"><img width="100%" src="https://airform.io/artwork.png" alt="Airform - Functional HTML forms. Keeping it plane and simple."></a>

> Functional HTML forms. Keeping it plane and simple.


## Why it's awesome

What if you could use a service that gives you full control over the form, yet doesn’t require you to use anything on your server? Airform gives you the ability to create functional HTML forms without thinking about servers.


## Features

- No server management.
- Flexible scaling.
- Automated high availabilty.
- Integrated security model.
- Unlimited form submissions.
- Orchestrate multiple forms.
- Invisible emails.
- Open source.


## Usage

```
<form action="https://airform.io/your@email.com" method="post">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <textarea name="message"></textarea>
  <button>Send</button>
</form>
```

Note: The `action` attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
The `method` attribute defines which HTTP method to send the data with (it can be "get" or "post").


## Contributing

Want to contribute? Follow these [recommendations](.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](license).
