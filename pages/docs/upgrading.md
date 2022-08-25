---
title: Upgrading
description: Quidem magni aut exercitationem maxime rerum eos.
---

## From 0.1.x to 1.0.0

### PHP 7.4 Required

Alfred Workflows now requires PHP 7.4 or greater.

### `result` Method Renamed

In order to bring parity with the terminology used by Alfred, the `result` method has been renamed to `item`:

```php
$workflow->result()->title('Bob');
// change to
$workflow->item()->title('Bob');
```

[Basic Usage Documentation](/docs/items)

### Modifier Key Methods

The `mod` method has been refactored to reduce the number of arguments being passed in order to increase clarity. It also expands the possibilities for modifier keys to the full functionality provided by Alfred.

If you previously had this:

```php
$workflow->result()->mod('cmd', 'Search for Bob', 'search');
```

You can use either of these approaches to achieve the same result:

```php
use Alfred\Workflows\ItemParam\Mod;

$workflow->item()->mod(
    Mod::cmd()->subtitle('Search for Bob')->arg('search');
);

// or

$workflow->item()->cmd(function(Mod $mod) {
    $mod->subtitle('Search for Bob')->arg('search');
});

```

Modifier key helper functions have also been updated. If you previously had something like this:

```php
$workflow->result()->cmd('Search for Bob', 'search');
```

you should update it to this:

```php
use Alfred\Workflows\ItemParam\Mod;

$workflow->item()->cmd(function(Mod $mod) {
    $mod->subtitle('Search for Bob')->arg('search');
});
```

This is applicable to all of the modifier helper functions: `cmd`, `shift`, `fn`, `ctrl`, `alt`.

[Modifier Keys Documentation](/docs/items/modifier-keys)

### Copy and Large Text

The `largetype` helper function was renamed to `largeType` (camel case).

The argument order for the `text` method has been reversed, and constants now exist for the `$type` value. If you previously had something like this:

```php
$workflow->result()->text('largetype', 'Linda is the best!')
$workflow->result()->text('copy', 'Linda has been copied!')
```

you should update it to this:

```php
use Alfred\Workflows\ItemParam\Text;

$workflow->item()->text("Linda is the best!", Text::TYPE_LARGE_TYPE);
$workflow->item()->text("Linda has been copied!", Text::TYPE_COPY);
```

[Copy and Large Type Documentation](/docs/items/text)

### Icons

Icon helper methods have been renamed. If you previously had something like this:

```php
$workflow->result()->fileiconIcon('bob.png')
$workflow->result()->filetypeIcon('bob.png')
```

you should update it to this:

```php
$workflow->item()->iconForFilePath('bob.png');
$workflow->item()->iconForFileType('bob.png');
```

In addition, the second argument of the `icon` method now accepts a constant to reduce confusion:

```php
use Alfred\Workflows\ItemParam\Icon;

$workflow->item()->icon('burger.png', Icon::TYPE_FILE_ICON);
$workflow->item()->icon('png', Icon::TYPE_FILE_TYPE);
```

[Icon Documentation](/docs/items/icon)

### Item Type

The `type` method was completely re-worked to make its purpose and use clearer. Instead of passing strings around as argument, we now pass constants and have helper methods. If you previously had something like this:

```php
$workflow->result()->type('default');
$workflow->result()->type('file');
$workflow->result()->type('file:skipcheck');
```
you should update it to this:

```php
use Alfred\Workflows\ItemParam\Type;

$workflow->item()->type(Type::TYPE_DEFAULT);
$workflow->item()->typeFile();
$workflow->item()->typeFileSkipExistenceCheck();
```

[Type Documentation](/docs/items/type)

### Outputting

While technically not a breaking change, you should be aware that the `output` method now automatically echoes the output unless you pass `false` telling it not to. Previously you had to write:

```php
echo $workflow->output();
```

Now you can simply write:

```php
$workflow->output();
```

[Outputting Documentation](/docs/output)

### Sorting

Sorting is now a method off of the `items` method, and no longer returns an `item` (is no longer chainable). If you previously had something like this:

```php
$workflow->sortResults();
```

you should update it to this:

```php
$workflow->items()->sort();
```

The arguments have also been reversed, allowing for more common sorting scenarios without passing a sort direction. If you previously had something like this:

```php
$workflow->sortResults('asc', 'subtitle');
$workflow->sortResults('desc', 'arg');
```

you should update it to this:

```php
use Alfred\Workflows\Items;

$workflow->items()->sort('subtitle');
$workflow->items()->sort('arg', Items::SORT_DESC);
```

[Sorting Documentation](/docs/items/sorting)

### Filtering

Filtering is now a method off of the `items` method, and no longer returns an `item` (is no longer chainable). If you previously had something like this:

```php
$workflow->filterResults('bob');
```

you should update it to this:

```php
$workflow->items()->filter('bob');
```

[Filtering Documentation](/docs/items/filtering)