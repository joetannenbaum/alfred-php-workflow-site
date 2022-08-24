---
title: Autocomplete
description: Set the autocomplete for the selected Alfred workflow item.
---

{% badges %}
    {% badge type="recommended" /%}
{% /badges %}

From Alfred's [Documentation](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/):

> An optional but recommended string you can provide which is populated into Alfred's search field if the user auto-complete's the selected result (⇥ by default).

> If the item is set as "valid": false, the auto-complete text is populated into Alfred's search field when the user actions the result.

```php
$workflow->item()->autocomplete('Chorizo Your Own Adventure Burger');
```