---
title: Passing Arguments
description: Quidem magni aut exercitationem maxime rerum eos.
---

{% badges %}
    {% badge type="recommended" /%}
{% /badges %}

You can pass an argument to your output action with the `arg` or `argument` method:

```php
$workflow->item()->arg('bob');

// or

$workflow->item()->argument('bob');
```

You can also pass an array to either method:

```php
$workflow->item()->arg([
    'The Roquefort Files Burger',
    'Hit Me With Your Best Shallot Burger',
]);
```

{% callout title="Heads up" %}
    While passing an argument is optional, it's highly recommended that do. If excluded, you won't know which result item the user has selected.
{% /callout %}