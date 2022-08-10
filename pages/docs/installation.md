---
title: Installation
description: Quidem magni aut exercitationem maxime rerum eos.
---

---

## Install via Composer

```
composer require joetannenbaum/alfred-workflow
```

## Basic usage

```php
require __DIR__ . '/vendor/autoload.php';

use Alfred\Workflows\Workflow;

$workflow = new Workflow();

$workflow->items()
          ->add()
          ->title('Bob')
          ->subtitle('Head Burger Chef')
          ->arg('bob');


$workflow->items()
          ->add()
          ->title('Linda')
          ->subtitle('Wife')
          ->arg('linda');

$workflow->output();
```