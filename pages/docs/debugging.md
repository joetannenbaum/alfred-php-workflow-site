---
title: Debugging
description: Quidem magni aut exercitationem maxime rerum eos.
---

Debugging a workflow is best done with Alfred's [Workflow Debugger](https://www.alfredapp.com/help/workflows/advanced/debugger/). You can tell when the Debugger is active using the `alfred` `debugging` method:

```php
if ($workflow->alfred()->debugging()) {
    // Debugger is open and active!
}
```

If you want to log data to the Workflow Debugger, you can use the `logger` method. This will only print logs when the Workflow Debugger is open:

```php
$workflow->logger()->info('HOME: ' . $workflow->env('HOME'));
// Anything JSON-encodable will be JSON encoded
$workflow->logger()->info(['Tina', 'Gene', 'Louise']);
```

In the Workflow Debugger, this will show up as:

```log
[alfred] 2022-08-10 16:51:04 HOME: /Users/me
[alfred] 2022-08-10 16:51:04 ["Tina","Gene","Louise"]
```

By default, logs are prefixed with `[your workflow name]`, but you can set your own prefix:

```php
$workflow->logger()->setPrefix('heads-up');
$workflow->logger()->info('HOME: ' . $workflow->env('HOME'));
// [heads-up] 2022-08-10 16:51:04 HOME: /Users/me
```