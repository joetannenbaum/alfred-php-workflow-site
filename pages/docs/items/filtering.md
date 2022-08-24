---
title: Manually Filtering
description: Quidem magni aut exercitationem maxime rerum eos.
---

To filter your `items` programatically via the `title` property (case insensitive):

```php
$workflow->items()->filter('Bob');
```

With a custom property:

```php
$workflow->items()->filter('Bob', 'subtitle');
```

You can also pass in a function or method as the first parameter to handle filtering yourself:

```php
use Alfred\Workflows\Item;

$workflow->items()->filter(function(Item $item) {
    return $item->subtitle !== 'Louise';
});
```