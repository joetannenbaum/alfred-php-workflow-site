---
title: Items
description: Quidem magni aut exercitationem maxime rerum eos.
---

A Script Filter is required to return items. Each item describes a result row displayed in Alfred. Three of the most commonly used properties of an item are the title, subtitle, and icon. But there's so much more.

The Script Filter input is one of the most powerful workflow objects, allowing you to populate Alfred's results with your own custom items.

---

## Adding a Basic Item

```php
$workflow = new Workflow();

$workflow->item()
         ->title('Bob')
         ->subtitle('Head Burger Chef')
         ->icon('images/bob.png');

$workflow->item()
         ->title('Linda')
         ->subtitle('Wife')
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
```

{% figure src="/images/basic-usage.png" alt="Basic Usage" /%}

<!-- Maybe offer a complex example of building out an item based on conditionals? -->

<!-- Mention about chainable methods, they always return Item -->