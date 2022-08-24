---
title: Specifying the Universal Action
description: Specifying the Universal Actions for your Alfred workflow item.
---

To specify the argument used for [Universal Actions](https://www.alfredapp.com/universal-actions/), you can use the `action` method. The content type will automatically be derived by Alfred to file, url or text:

```php
$workflow->action('https://cooking.nytimes.com/tag/burgers');
// or
$workflow->action(['burger.jpg', 'bun.jpg']);
```

This will override the `argument` that you have specified for the item if the user takes action on it using Universal Actions.

If you want to specify the content type for Alfred so that it selects the correct Universal Actions:

```php
use Alfred\Workflows\ItemParam\Action;

$workflow->item()->action(
    Action::url('https://cooking.nytimes.com/tag/burgers')
            ->text(['burger.jpg', 'bun.jpg'])
);

// or

$workflow->item()->action(function(Action $action) {
    $action->url('https://cooking.nytimes.com/tag/burgers')
            ->text(['burger.jpg', 'bun.jpg']);
});

```

The `Action` builder has the following methods available to you, they all accept a string or an array of strings:

- `url`
- `text`
- `auto`
- `file`