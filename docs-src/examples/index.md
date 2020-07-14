---
layout: example.11ty.cjs
title: <container-element> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  container-element p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<container-element>
  <p>This is child content</p>
</container-element>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<container-element>
  <p>This is child content</p>
</container-element>
```
