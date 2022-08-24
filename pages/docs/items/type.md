---
title: Specifying Type
description: Specify that the item is a file in your Alfred workflow.
---

By default, there is no specific "type" to the item you are returning:

```php
use Alfred\Workflows\ItemParam\Type;

// Specify the default type (typically not necessary to use)
$workflow->item()->type(Type::TYPE_DEFAULT);
```

If it makes sense for your workflow, you can tell Alfred to treat your result as a file. By doing so, this allows the user to perform actions on the file like they can with Alfred's standard file filters.

```php
use Alfred\Workflows\ItemParam\Type;

$workflow->item()->type(Type::TYPE_FILE);
// or
$workflow->item()->typeFile();
```

If you specify that the result is a file, Alfred will check if the file exists before presenting that result. This has a very small performance implication but makes the results as predictable as possible.

If you would like Alfred to skip this check as you are certain that the files you are returning exist:

```php
use Alfred\Workflows\ItemParam\Type;

$workflow->item()->type(Type::TYPE_FILE_SKIP_CHECK);
// or
$workflow->item()->typeFileSkipExistenceCheck();
```