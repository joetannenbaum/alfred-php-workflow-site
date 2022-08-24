---
title: Cache
description: Caching data within your Alfred workflow.
---

{% callout type="warning" title="Heads up" %}
You must set your Workflow Bundle ID in order to use the cache. If you try and access the cache without setting the Bundle ID, the library will throw an Exception.

To set the Bundle ID: In Alfred > Workflows, double-click your workflow in the list on the left hand side and fill in the "Bundle Id" field (e.g. com.example.workflowname)
{% /callout %}

If you need to cache volatile data for your workflow, you can easily do so via the `cache` method.

This method reads and writes to a file called `cache.json` witin the Alfred-recommended directory on the user's computer (`~/Library/Caches/com.runningwithcrayons.Alfred/Workflow Data/[bundle id]`).

```php
$workflow->cache()->writeJson([
    [
        'id'     => 123,
        'name'   => 'Bob Belcher',
        'avatar' => 'bob.png',
    ],
    [
        'id'     => 456,
        'name'   => 'Linda Belcher',
        'avatar' => 'linda.png',
    ],
]);

$data = $workflow->cache()->readJson();
```

Any argument you pass into the `writeJson` method will be JSON encoded and written to the default cache path. Each time you call `writeJson` you are over-writing the existing cache file.

`readJson` will read in the file from the default cache path and decode the JSON as an associative array. To read the data as an object:

```php
$data = $workflow->cache()->readJson(null, false);
```

To get the default cache path, you can use the `path` method:

```php
$workflow->cache()->path();
```

## Custom Cache File

By default, the filename is `cache.json`, but you can manage multiple caches by passing in a different filename when reading and writing:


```php
$workflow->cache()->writeJson([1, 2, 3], 'secondary.json');
$workflow->cache()->readJson('secondary.json');
$workflow->cache()->path('secondary.json');
```

## Working with non-JSON Data

```php
$workflow->cache()->write('Remember this for a bit.');
$workflow->cache()->read();

$workflow->cache()->write('Remember this for a bit.', 'secondary.txt');
$workflow->cache()->read('secondary.txt');
```