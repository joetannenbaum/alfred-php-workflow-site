---
title: Handling Modifier Keys
description: Quidem magni aut exercitationem maxime rerum eos.
---

The mod element gives you control over how the modifier keys react. You can now define the valid attribute to mark if the result is valid based on the modifier selection and set a different arg to be passed out if actioned with the modifier.

---

{% badges %}
    {% badge title="> Alfred 3.4.1" /%}
{% /badges %}

You can define an icon and variables for each object in the mods object.

---

It is also possible to add a variables object for each mod in the item object, allowing you to differentiate when a mod result is selected within your workflow. Note that when setting a variables object on a mod, this replaces the item variables, and doesn't inherit from them, allowing maximum flexibility.

When a mod doesn't contain a variables object, it will assume the item variables. To prevent this, add an empty variables object: "variables": {}.

<!-- TODO: Implement this empty variables logic -->

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

Within the `Mod` builder, you have have a subset of the `Item` methods available to you:

- `subtitle`
- `arg`
- `valid`
- `invalid`
- `variable`
- `icon`
- `iconFromFile`
- `iconFromFileType`