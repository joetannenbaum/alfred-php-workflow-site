---
title: Specifying Type
description: Quidem magni aut exercitationem maxime rerum eos.
---

By specifying "type": "file", this makes Alfred treat your result as a file on your system. This allows the user to perform actions on the file like they can with Alfred's standard file filters.

When returning files, Alfred will check if the file exists before presenting that result to the user. This has a very small performance implication but makes the results as predictable as possible. If you would like Alfred to skip this check as you are certain that the files you are returning exist, you can use "type": "file:skipcheck".

```php
use Alfred\Workflows\ItemParam\Type;

// Specify the default type
$workflow->item()->type(Type::TYPE_DEFAULT);

// Specify that the result should be treated as a file
$workflow->item()->type(Type::TYPE_FILE);
// or
$workflow->item()->typeFile();

// Specify that the result should be treated as a file,
// but don't worry about checking whether it exists or not
$workflow->item()->type(Type::TYPE_FILE_SKIP_CHECK);
// or
$workflow->item()->typeFileSkipExistenceCheck();
```