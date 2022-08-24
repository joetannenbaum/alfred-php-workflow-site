---
title: Re-run Automatically
description: Re-running your Alfred workflow automatically.
---

You can specify that your script should be re-run automatically after an interval between 0.1 to 5.0 seconds. The script will only be re-run if the script filter is still active and the user hasn't changed the state of the filter by typing and triggering a re-run.

```php
$workflow->rerun(1.5);
```
