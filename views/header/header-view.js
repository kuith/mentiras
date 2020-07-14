import { LitElement, html } from 'lit-element';

export class headerView extends LitElement {

  render() {
    return html`
      <h1>Hello desde la vista encabezado</h1>
    `;
  }

}

window.customElements.define('header-view', headerView);
