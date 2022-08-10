---
title: Autocomplete
description: Quidem magni aut exercitationem maxime rerum eos.
---

{% badges %}
    {% badge type="recommended" /%}
{% /badges %}

An optional but recommended string you can provide which is populated into Alfred's search field if the user auto-complete's the selected result (⇥ by default).

<!-- TODO: WHAT IS THIS AND MAKE SURE I UNDERSTAND IT -->

If the item is set as "valid": false, the auto-complete text is populated into Alfred's search field when the user actions the result.

```php
$workflow->item()->autocomplete('Chorizo Your Own Adventure Burger');
```