---
title: Title
description: Quidem magni aut exercitationem maxime rerum eos.
---

{% badges %}
    {% badge type="required" /%}
{% /badges %}

The title displayed in the result row.

```php
$workflow->item()->title('Bob');
```

{% callout title="Heads up" %}
The only required property for an item is the `title`. You must include a title for each item or the workflow will throw an Exception.
{% /callout %}