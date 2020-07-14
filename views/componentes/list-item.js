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
      <p>${this.itemText}</p>
    `;
  }

}

window.customElements.define('list-item', listItem);
