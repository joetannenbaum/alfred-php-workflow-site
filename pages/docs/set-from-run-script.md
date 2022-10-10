---
title: Setting Args and Vars from a Script Action
description: Setting arguments, variables, and config from a Script Action
---

You can set arguments, variables, and override workflow configuration right from a Script Action (Run Script).

## Argument

The `arg` string sets the argument passed out of Script Action which is used as the query for the attached objects. Leaving out the `arg` string will clear the query, and setting arg to "{query}" will pass through the query.

```php
$workflow->setFromRunScript()->arg('{query}')->output();
```

## Variables

The `variables` object enables new variables to be set, and stream variables to be overridden.

```php
$workflow->setFromRunScript()->variables([
    'color' => 'blue',
    'size'  => 'xl',
])->output();
```

## Config

The `config` object enables dynamic (and overriding) configuration of the workflow objects connected to the output of the Script Action.

The easiest way to find out which configuration fields are available for an object is to copy the object configuration from the right-click popup menu for the selected workflow object on the canvas.

Only the included fields will be overridden, allowing for partial dynamic configuration of a workflow object.

The fields are generally self-explanatory, but if you have trouble identifying a field, set it to a unique value in the object's configuration sheet and copy the configuration again. You'll see the value you set.

```php
$workflow->setFromRunScript()->config([
    'url'  => '{query}',
    'utf8' => true,
])->output();
```

## Combining

You can chain from the `setFromRunScript` method to set multiple values at once:

```php
$workflow->setFromRunScript()
            ->arg('{query}')
            ->variables([
                'color' => 'blue',
                'size'  => 'xl',
            ])
            ->config([
                'url'  => '{query}',
                'utf8' => true,
            ])
            ->output();
```

{% callout title="Heads up" %}
The `setFromRunScript` is completely separate from outputting `items` as you would from a Script Filter. Make sure you are calling the `output` method from the result of `setFromRunScript`.
{% /callout %}
