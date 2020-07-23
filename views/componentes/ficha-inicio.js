import {LitElement, html, css} from 'lit-element';

export class FichaInicio extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        Pantalla inicial
      </div>
    `;
  }
}

window.customElements.define('ficha-inicio', FichaInicio);
