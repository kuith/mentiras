import {LitElement, html, css} from 'lit-element';

export class FichaInicio extends LitElement {
  static get styles() {
    return css`
      div {
          margin: 2em 1em 0em 1em;
          text-align: center;
        }
    `;
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
        Diario de la campaña Mentiras Eternas
      </div>
    `;
  }
}

window.customElements.define('ficha-inicio', FichaInicio);
