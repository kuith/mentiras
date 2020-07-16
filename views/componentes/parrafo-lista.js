import {LitElement, html} from 'lit-element';

export class parrafoLista extends LitElement {
  static get properties() {
    return {
      tituloText: {type: String},
      listaText: {type: String},
    };
  }

  constructor() {
    super();
    this.tituloText = 'Texto titulo lista inicial';
    this.listaText = 'Texto parrafo lista inicial';
  }

  render() {
    return html`
      ${this.tituloText}
      <ul>
        <li>
          ${this.listaText}
        </li>
      </ul>
    `;
  }
}

window.customElements.define('parrafo-lista', parrafoLista);
