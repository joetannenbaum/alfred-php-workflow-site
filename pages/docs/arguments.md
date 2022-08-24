---
title: Arguments
description: Retrieving Alfred workflow arguments.
---

To retrieve an argument passed in as `$argv`, you can use the `argument` method:

```php
$workflow->argument();
```

If you'd like all of the arguments passed in, the `arguments` method will return an array:

```php
$workflow->arguments();
```

**Of note:** both methods ignore `$argv[0]`, which is the name that was used to run the script. If you need `$argv[0]`, it's better to use `$argv` directly.

{% callout title="Heads up" %}
    These methods only work when the `with input as argv` option is selected in the Script Filter block (the recommended setting). If you have selected `with input as {query}` you'll have to retrieve the arguments yourself.
{% /callout %}