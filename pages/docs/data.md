---
title: Data
description: Quidem magni aut exercitationem maxime rerum eos.
---

{% callout type="warning" title="Heads up" %}
You must set your Workflow Bundle ID in order to use the data method. If you try and access data without setting the Bundle ID, the library will throw an Exception.

To set the Bundle ID: In Alfred > Workflows, double-click your workflow in the list on the left hand side and fill in the "Bundle Id" field (e.g. com.example.workflowname)
{% /callout %}

If you need to cache non-volatile data for your workflow, you can easily do so via the `data` method.

This method reads and writes to a file called `data.json` in the Alfred-recommended path on the user's computer (`~/Library/Application Support/Alfred/Workflow Data/[bundle id]`).

```php
$workflow->data()->writeJson([
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

$data = $workflow->data()->readJson();
```

Any argument you pass into the `writeJson` method will be JSON encoded and written to the default data path. Each time you call `writeJson` you are over-writing the data file.

`readJson` will read in the file from the default data path and decode the JSON as an associative array. To read the data as an object:

```php
$data = $workflow->data()->readJson(null, false);
```

To see the default data path, you can use the `path` method:

```php
$workflow->data()->path();
```

By default, the filename is `data.json`, but you can manage multiple data files by passing in a different filename when reading and writing:


```php
$workflow->data()->writeJson([1, 2, 3], 'secondary.json');
$workflow->data()->readJson('secondary.json');
$workflow->data()->path('secondary.json');
```

If you need to read or write non-JSON data, you can easily do so:

```php
$workflow->data()->write('Remember this.');
$workflow->data()->read();

$workflow->data()->write('Remember this.', 'secondary.txt');
$workflow->data()->read('secondary.txt');
```