import {LitElement, html} from 'lit-element';

export class parrafoTexto extends LitElement {
  static get properties() {
    return {
      tituloText: {type: String},
      parrafoText: {type: String},
    };
  }

  constructor() {
    super();
    this.tituloText = 'Texto titulo inicial';
    this.parrafoText = 'Texto parrafo inicial';
  }

  render() {
    return html` ${this.tituloText}: ${this.parrafoText} `;
  }
}

window.customElements.define('parrafo-texto', parrafoTexto);
