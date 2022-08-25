---
title: Installation
description: Quidem magni aut exercitationem maxime rerum eos.
---

## Install via Composer

```
composer require joetannenbaum/alfred-workflow
```

## Basic usage

```php
use Alfred\Workflows\Workflow;

$workflow = new Workflow();

$workflow->item()
          ->title('Bob')
          ->subtitle('Head Burger Chef')
          ->arg('bob');


$workflow->item()
          ->title('Linda')
          ->subtitle('Restaurant Manager')
          ->arg('linda');

$workflow->output();
```