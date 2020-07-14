
import { LitElement, html } from 'lit-element';

export class mainView extends LitElement {

  render() {
    return html`
      <h1>Hello desde la vista principal</h1>
    `;
  }

}

window.customElements.define('main-view', mainView);
