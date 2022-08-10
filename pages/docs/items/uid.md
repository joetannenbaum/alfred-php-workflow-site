---
title: UID
description: Quidem magni aut exercitationem maxime rerum eos.
---

A unique identifier for the item which allows help Alfred to learn about this item for subsequent sorting and ordering of the user's actioned results.

It is important that you use the same UID throughout subsequent executions of your script to take advantage of Alfred's knowledge and sorting. If you would like Alfred to always show the results in the order you return them from your script, exclude the UID field.

```php
$workflow->item()->uid('bob-belcher');
```

{% callout title="Heads up" type="warning" %}
If you would like to control the order of the results and have Alfred present the items in the exact order you return them from your script, don't use the `uid` method on your items.
{% /callout %}