---
title: Specifying Copy and Large Type Text
description: Specify copy and large type text for your Alfred workflow item.
---

To specify what Alfred should display when the user displays the result in Large Text by typing `⌘L`:

```php
use Alfred\Workflows\ItemParam\Text;

$workflow->item()->largeType("Eat at Bob's!");

// or

$workflow->item()->text("Eat at Bob's!", Text::TYPE_LARGE_TYPE);
```

To specify what Alfred should copy when the user types `⌘C` on the selected item:

```php
use Alfred\Workflows\ItemParam\Text;

$workflow->item()->copy("Eat at Bob's!");

// or

$workflow->item()->text("Eat at Bob's!", Text::TYPE_COPY);
```

If these are not defined, the `arg` for the item is copied to the Clipboard or used for Large Type.