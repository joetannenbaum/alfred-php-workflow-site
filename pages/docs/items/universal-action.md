---
title: Specifying the Universal Action
description: Quidem magni aut exercitationem maxime rerum eos.
---

This element defines the [Universal Action](https://www.alfredapp.com/universal-actions/) items used when actioning the result, and overrides arg being used for actioning. The action key can take a string or array for simple types', and the content type will automatically be derived by Alfred to file, url or text.

```php
$workflow->action('https://cooking.nytimes.com/tag/burgers');
// or
$workflow->action(['burger.jpg', 'bun.jpg']);
```

If you want to specify the content type for Alfred so that it selects the correct Universal Actions, you can:

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