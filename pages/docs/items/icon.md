---
title: Displaying an Icon
description: Displaying an icon next to your Alfred worfklow item.
---

Workflows are run from their workflow folder, so you can reference icons stored in your workflow relatively.

```php
// Display burger.png as the icon
$workflow->item()->icon('burger.png');
```

If you'd like to display a system icon, you can approach it two different ways: you can ask the system to return the file type icon for a specific file path, or you can specify the file type directly.

For example, here are two ways to display the system "png" icon as the icon for your item:

```php
$workflow->item()->iconForFilePath('burger.png');
$workflow->item()->iconForFileType('png');
```

**Note:** when using `iconForFilePath`, the file or directory must exist to display the correct icon.

If you'd like, you can always pass a second argument to the `icon` method to specify how the icon should be handled. The following accomplishes the same as the above:

```php
use Alfred\Workflows\ItemParam\Icon;

$workflow->item()->icon('burger.png', Icon::TYPE_FILE_ICON);
$workflow->item()->icon('png', Icon::TYPE_FILE_TYPE);
```