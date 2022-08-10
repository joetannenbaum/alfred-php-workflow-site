---
title: Matching
description: Quidem magni aut exercitationem maxime rerum eos.
---

{% badges %}
    {% badge title="> Alfred 3.5" /%}
{% /badges %}

Specify Matching When Alfred Filters Results

From Alfred 3.5, the match field enables you to define what Alfred matches against when the workflow is set to "Alfred Filters Results". If match is present, it fully replaces matching on the title property.

Note that the match field is always treated as case insensitive, and intelligently treated as [diacritic insensitive](https://www.oreilly.com/library/view/inside-the-index/9780735625358/ch05s10.html). If the search query contains a diacritic, the match becomes diacritic sensitive.

This option pairs well with the "Alfred Filters Results" Match Mode option.

```php
$workflow->item()->match('Use It Or Bleus It Burger');
```