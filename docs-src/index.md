---
layout: page.11ty.cjs
title: <container-element> ⌲ Home
---

# &lt;container-element>

`<container-element>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<container-element>` is just an HTML element. You can it anywhere you can use HTML!

```html
<container-element></container-element>
```

  </div>
  <div>

<container-element></container-element>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<container-element>` can be configured with attributed in plain HTML.

```html
<container-element name="HTML"></container-element>
```

  </div>
  <div>

<container-element name="HTML"></container-element>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<container-element>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;container-element&gt;</h2>
    <container-element .name=${name}></container-element>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;container-element&gt;</h2>
<container-element name="lit-html"></container-element>

  </div>
</section>
