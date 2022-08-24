---
title: Items
description: Add items to your Alfred workflow.
---

A Script Filter is required to return items. Each item describes a result row displayed in Alfred. Three of the most commonly used properties of an item are the [`title`](items/title), [`subtitle`](items/subtitle), and [`icon`](items/icon). But there's so much more.

The Script Filter input is one of the most powerful workflow objects, allowing you to populate Alfred's results with your own custom items.

## Adding Basic Items

```php
$workflow = new Workflow();

$workflow->item()
         ->title('Bob')
         ->subtitle('Head Burger Chef')
         ->icon('images/bob.png');

$workflow->item()
         ->title('Linda')
         ->subtitle('Restaurant Manager')
         ->icon('images/linda.png');

$workflow->item()
         ->title('Tina')
         ->subtitle('Horse Fanatic')
         ->icon('images/tina.png');

$workflow->item()
         ->title('Gene')
         ->subtitle('Synth Player')
         ->icon('images/gene.png');

$workflow->item()
         ->title('Louise')
         ->subtitle('Trouble Maker')
         ->icon('images/louise.png');

$workflow->output();
```

{% figure src="/images/basic-usage.png" alt="Basic Usage" /%}

{% callout title="FYI" %}
All methods off of the `item` method are chainable, they all return `Alfred\Workflows\Item`.
{% /callout %}