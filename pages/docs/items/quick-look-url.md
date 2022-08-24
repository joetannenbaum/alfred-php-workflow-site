---
title: Quick Look URL
description: Specifying the quick look URL for your Alfred workflow item.
---

If the user uses the presses `shift` or `⌘Y` on the selected item, Alfred opens the Quick Look. You can specify the URL or file that Alfred should open in Quick Look for your item by using the `quickLookUrl` method:

```php
$workflow->item()->quickLookUrl('https://www.alfredapp.com/');
$workflow->item()->quickLookUrl('~/Desktop/say-it-aint-cilantro-burger.jpg');
```

If absent, Alfred will attempt to use the `arg` as the quicklook URL.