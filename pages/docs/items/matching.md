---
title: Matching
description: Specify string Alfred should match against in your workflow.
---

{% badges %}
    {% badge title="> Alfred 3.5" /%}
{% /badges %}

When the workflow match mode option "Afred Filters Results" is set, the default behavior is to match the query against the `title` attribute. You can override this behavior using the `match` method, telling Alfred specifically what you'd like it to match against.

Note that the match field is always treated as case insensitive, and intelligently treated as [diacritic insensitive](https://www.oreilly.com/library/view/inside-the-index/9780735625358/ch05s10.html). If the search query contains a diacritic, the match becomes diacritic sensitive.

```php
$workflow->item()->match('Use It Or Bleus It Burger');
```