---
title: Text (Copy and Large Type)
description: Quidem magni aut exercitationem maxime rerum eos.
---

The text element defines the text the user will get when copying the selected result row with ⌘C or displaying large type with ⌘L.

If these are not defined, you will inherit Alfred's standard behaviour where the arg is copied to the Clipboard or used for Large Type.

```php
use Alfred\Workflows\ItemParam\Text;

$workflow->item()->text("Come eat at Bob's!", Text::TYPE_LARGE_TYPE);
$workflow->item()->text("Come eat at Bob's!", Text::TYPE_COPY);

// or

$workflow->item()->largeType("Come eat at Bob's!");
$workflow->item()->copy("Come eat at Bob's!");

```