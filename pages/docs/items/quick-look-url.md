---
title: Quick Look URL
description: Quidem magni aut exercitationem maxime rerum eos.
---

A Quick Look URL which will be visible if the user uses the Quick Look feature within Alfred (tapping shift, or ⌘Y). Note that quicklookurl will also accept a file path, both absolute and relative to home using ~/.

If absent, Alfred will attempt to use the arg as the quicklook URL.

```php
$workflow->item()->quickLookUrl('~/Desktop/say-it-aint-cilantro-burger.jpg');
```