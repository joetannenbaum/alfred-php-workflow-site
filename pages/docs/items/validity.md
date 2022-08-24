---
title: Validity
description: Mark an Alfred workflow item as valid or invalid.
---

By default, all items returned are considered valid unless you specify otherwise. If an item is valid, Alfred will continue with the workflow and pass along any arguments or variables associated with the item.

If an item is invalid, Alfred will do nothing. This allows you to decide based on the user's query whether or not you'd like to let the workflow continue.

```php
// Mark an item as valid.
// This is the default, you should rarely need to do this.
$workflow->item->valid();

// Mark an item as invalid
$workflow->item->valid(false);
$workflow->item->invalid();
```