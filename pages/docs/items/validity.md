---
title: Validity
description: Quidem magni aut exercitationem maxime rerum eos.
---
<!-- TODO: Human this. -->

If an item is valid then Alfred will action this item when the user presses return. If the item is not valid, Alfred will do nothing. This allows you to intelligently prevent Alfred from actioning a result based on the current {query} passed into your script.

If you exclude the valid attribute, Alfred assumes that your item is valid.

```php
// Mark an item as valid (default)
$workflow->item->valid();

// Mark an item as invalid
$workflow->item->valid(false);
$workflow->item->invalid();
```