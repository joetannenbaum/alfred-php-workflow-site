---
title: UID
description: A unique identifier for your Alfred workflow item.
---

From Alfred's [Documentation](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/):

> A unique identifier for the item which allows help Alfred to learn about this item for subsequent sorting and ordering of the user's actioned results.

> It is important that you use the same UID throughout subsequent executions of your script to take advantage of Alfred's knowledge and sorting. If you would like Alfred to always show the results in the order you return them from your script, exclude the UID field.

```php
$workflow->item()->uid('bob-belcher');
```

If you would like to control the order of the results and have Alfred present the items in the exact order you return them from your script, don't use the `uid` method on your items.

{% badges %}
    {% badge title="> Alfred 5" /%}
{% /badges %}

If you would like to specify the order and allow Alfred to retain knowledge of your items (such as your current selection during a re-run), you can use the `skipKnowledge` method:

```php
$workflow->skipKnowledge();
```