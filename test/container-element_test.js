import {containerElement} from '../container-element.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('container-element', () => {
  test('is defined', () => {
    const el = document.createElement('container-element');
    assert.instanceOf(el, containerElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<container-element></container-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<container-element name="Test"></container-element>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<container-element></container-element>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
