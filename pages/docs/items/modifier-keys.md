---
title: Handling Modifier Keys
description: Handling modifier keys for your Alfred workflow items.
---

You can specify how modifier keys (`cmd` (⌘), `alt` (⌥), `ctrl` (⌃), `shift` (⇧), `fn`) change how your items appears and behaves within your workflow. For example, you could change the `subtitle`, the `icon`, the `arguments`, etc based on which modifier key the user is pressing when your item is selected.

```php
use Alfred\Workflows\ItemParam\Mod;

$workflow->item()->title('The One Yam Band Burger')->mod(
    Mod::cmd()->subtitle('Copy "The One Yam Band Burger"');
);

// or

$workflow->item()
            ->title('The One Yam Band Burger')
            ->cmd(function(Mod $mod) {
                $mod->subtitle('Copy "Do Something Different"');
            });
```

You can specify the following modifier keys:

```php
$workflow->item()->shift(function(Mod $mod) {
    // ...
});

$workflow->item()->fn(function(Mod $mod) {
    // ...
});

$workflow->item()->ctrl(function(Mod $mod) {
    // ...
});

$workflow->item()->alt(function(Mod $mod) {
    // ...
});

$workflow->item()->cmd(function(Mod $mod) {
    // ...
});
```

You can also specify a combination of modifier keys:

```php
use Alfred\Workflows\ItemParam\Mod;

// When the user press shift + cmd
$workflow->item()->mod(
    [Mod::KEY_SHIFT, Mod::MOD_CMD],
    function(Mod $mod) {
        // ...
    }
);
```

Within the `Mod` builder, you have have a subset of the `Item` methods available to you:

- `subtitle`
- `arg`
- `argument`
- `valid`
- `invalid`

{% badges %}
    {% badge title="> Alfred 3.4.1" /%}
{% /badges %}

- `variable`
- `variables`
- `icon`
- `iconForFilePath`
- `iconForFileType`

## Modifer Key Variables

When setting variables with a modifier key, it will completely override the `item` variables, it does not inherit from them:

```php
use Alfred\Workflows\ItemParam\Mod;

// If `cmd` is used, variables will be {"job": "burger_flipper"}
$workflow->item()
            ->title('The One Yam Band Burger')
            ->variable('burger_type', 'yam')
            ->cmd(function(Mod $mod) {
                $mod->subtitle('Copy "Do Something Different"')
                    ->variable('job', 'burger_flipper');
            });


```

When a modifier key doesn't contain variables, it will assume the `item` variables. To prevent this, you can specify that the variables should in fact be empty:

```php
$workflow->item()
            ->title('The One Yam Band Burger')
            ->variable('burger_type', 'yam')
            ->cmd(function(Mod $mod) {
                $mod->subtitle('Copy "Do Something Different"')
                    ->variable(null);
                    // or
                    // ->variables([]);
            });

```