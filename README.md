Django+HTMX: integration with the messages framework
===

This repository demonstrates how to use Django's messages framework with HTMX.

## How to run the demo?

```
pipenv install
pipenv run server
```

(No need to run `migrate` since this project doesn't use the database)

## How does it work?

Here are the two important pieces of this puzzle:

1. the [HtmxMessageMiddleware](/htmx_messages/middleware.py) that takes the messages and puts them in the `HX-Trigger` header
2. the [toast.js](/htmx_messages/static/toasts.js) that listens to the `messages` event and show the messages as toasts.

## How to use this in your project?

1. Copy the `htmx_messages/` folder into your project
2. Add `htmx_messages` in the `INSTALLED_APPS` setting
3. Add `{% include 'toast.html' %}` in near the end of `<body>`
4. Add `<script src="{% static 'toast.js' %}"></script>` as the last element of `<body>`

The files `toast.html` and `toast.js` are tailored for Bootstrap 5; **you'll have to modify them** to suit your needs.