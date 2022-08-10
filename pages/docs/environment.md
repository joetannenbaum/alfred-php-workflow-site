---
title: Environment
description: Quidem magni aut exercitationem maxime rerum eos.
---

You can easily access environment variables within your workflow using the `env` method:

```php
$workflow->env('HOME');
$workflow->env('DOCUMENT_ROOT');
```

You can also provide a fallback value in case the environment variable doesn't exist, otherwise the method will return null:

```php
$workflow->env('TEXT_SIZE', 12);
```

Calling `env` without any arguments will return all of the environment variables available to your workflow as an associative array:

```php
$workflow->env();
```

You can also easily access Alfred-specific environment variables via the `alfred` method:

```php
$workflow->alfred()->get('theme_background'); // rgba(0,0,0,0.50)
$workflow->alfred()->get('version'); // 5.0.1
```

For convenience, helper methods are supplied for common Alfred environment variables:

- `debug`
- `debugging`
- `preferences`
- `preferencesLocalHash`
- `theme`
- `themeBackground`
- `themeSelectionBackground`
- `themeSubtext`
- `version`
- `versionBuild`
- `workflowBundleId`
- `workflowCache`
- `workflowData`
- `workflowName`
- `workflowUid`
- `workflowVersion`

You can use them as such:

```php
$workflow->alfred()->preferences();
$workflow->alfred()->themeBackground();
$workflow->alfred()->version();
// etc.
```
