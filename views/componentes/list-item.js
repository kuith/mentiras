import { LitElement, html } from 'lit-element';

export class listItem extends LitElement {

  static get properties() {
    return {
      itemText: {type: String}
    };
  }

  constructor() {
    super();
    this.itemText = "texto inicial";
  }

  render() {
    return html`
      <li>${this.itemText}</li>
    `;
  }

}

window.customElements.define('list-item', listItem);
