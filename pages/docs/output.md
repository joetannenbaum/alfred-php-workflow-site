---
title: Outputting
description: Output final JSON from your Alfred worflow.
---

To output your items to Alfred:

```php
$workflow->output();
```

The `output` method will automatically `echo` the workflow's JSON, if you would rather store the JSON as a variable and `echo` it yourself later:

```php
$json = $workflow->output(false);

echo $json;
```