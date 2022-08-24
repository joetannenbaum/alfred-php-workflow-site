---
title: Variables
description: Passing variables out of your Alfred workflow.
---

Variables passed out of the script filter will remain accessible throughout the current session as environment variables.

In addition, they are passed back in when the script re-runs within the same session. This can be used for managing state between runs as the user types input or when the script is set to re-run after an interval.

```php
$workflow->variable('condiment', 'ketchup');
```

You can also set multiple variables at once using an associative array. The new variables will be merged in with any existing variable values for the item.

```php
$workflow->variable([
    'condiment' => 'ketchup',
]);

// or using the plural method

$workflow->variables([
    'condiment' => 'ketchup',
]);
```