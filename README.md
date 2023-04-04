Django+HTMX: integration with the messages framework
===

This repository demonstrates how to use [Django's messages framework](https://docs.djangoproject.com/en/4.1/ref/contrib/messages/) with [HTMX](https://htmx.org/).

This branch shows the `HX-Trigger` technique, you can find the "OOB swap" technique in the [oob branch](https://github.com/bblanchon/django-htmx-messages-framework/tree/oob).

<p align="center">
  <a href="https://youtu.be/I5_g7XYyemQ" target="_blank">
    <img alt="Django+HTMX: integration with the messages framework" src="django-htmx-messages-framework.gif">
  </a>
</p>

## How to run the demo?

```
pipenv install
pipenv run server
```

(No need to run `migrate` since this project doesn't use the database)

## How does it work?

Here are the two important pieces of this puzzle:

1. [HtmxMessageMiddleware](/htmx_messages/middleware.py) takes the messages and puts them in the `HX-Trigger` header
2. [toast.js](/htmx_messages/static/toasts.js) listens to the `messages` event and shows the messages as toasts.

:tv: **[See the tutorial on YouTube](https://youtu.be/I5_g7XYyemQ)** :tv:

:newspaper: [Read the article on my blog](https://blog.benoitblanchon.fr/django-htmx-messages-framework/) :newspaper: 

## How to use this in your project?

1. Run `pip install git+https://github.com/bblanchon/django-htmx-messages-framework.git` to install the package
2. Add `htmx_messages` to the `INSTALLED_APPS` setting
3. Add `htmx_messages.middleware.HtmxMessageMiddleware` to the `MIDDLEWARE`settings

4. Add `{% include 'toast.html' %}` in near the end of `<body>`
5. Add `<script src="{% static 'toast.js' %}"></script>` as the last element of `<body>`

The files `toast.html` and `toast.js` are tailored for Bootstrap 5; **you'll have to modify them** to suit your needs.
