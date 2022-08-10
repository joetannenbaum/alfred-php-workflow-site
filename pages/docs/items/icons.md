---
title: Displaying an Icon
description: Quidem magni aut exercitationem maxime rerum eos.
---

Workflows are run from their workflow folder, so you can reference icons stored in your workflow relatively.

```php
// Display burger.png as the icon
$workflow->item()->icon('burger.png');

// TODO: Should this be iconTypeFromFile? Or is that too confusing with the other method?
// Displays the system "png" icon as the icon
$workflow->item()->iconFromFile('burger.png');

// Displays the system "png" icon as the icon
$workflow->item()->iconFromFileType('png');
```

<!-- TODO: Is this clear enough? Make this human. -->

If you'd like, you can always pass a second argument to the `icon` method to specify how the icon should be handled:

```php
use Alfred\Workflows\ItemParam\Icon;

// Displays the system "png" icon as the icon
$workflow->item()->icon('burger.png', Icon::TYPE_FILE_ICON);

// Displays the system "png" icon as the icon
$workflow->item()->icon('png', Icon::TYPE_FILE_TYPE);
```