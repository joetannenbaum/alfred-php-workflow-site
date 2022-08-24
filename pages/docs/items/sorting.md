---
title: Sorting
description: Quidem magni aut exercitationem maxime rerum eos.
---

If you would like to sort your `items` by the `title` property (case sensitive), you can simply call:

```php
$workflow->items()->sort();
```

To sort them by `title` descending:

```php
$workflow->items()->sort('title', Items::SORT_DESC);
```

To sort by a custom property, for example `subtitle`:

```php
$workflow->items()->sort('subtitle');
```

You can also pass in a function or method as the first parameter and handle the sorting yourself:

```php
use Alfred\Workflows\Item;

$workflow->items()->sort(function(Item $a, Item $b) {
    return $a->arg > $b->arg ? 1 : -1;
});
```