---
title: Variables
description: Quidem magni aut exercitationem maxime rerum eos.
---

Variables within a variables object will be passed out of the script filter and remain accessible throughout the current session as environment variables.

In addition, they are passed back in when the script reruns within the same session. This can be used for managing state between runs as the user types input or when the script is set to re-run after an interval.

From Alfred 3.4.1, individual item objects can also have variables which are passed out of the Script Filter object if the associated Result Item is selected in Alfred's results list. variables set within an item will override any JSON session variables of the same name.

```php
$workflow->item()->variable('condiment', 'ketchup');
```

You can also set multiple variables at once using an associative array. The new variables will be merged in with any existing variable values for the item.

```php
$workflow->item()->variable([
    'condiment' => 'ketchup',
]);

// or using the plural method

$workflow->item()->variables([
    'condiment' => 'ketchup',
]);
```