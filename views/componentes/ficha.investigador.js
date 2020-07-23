import {LitElement, html, css} from 'lit-element';

export class FichaInvestigador extends LitElement {
  static get styles() {
    return css`
      div {
        margin: 1.5em;
      }
    `;
  }

  static get properties() {
    return {
      investigador: {type: Object},
      rutaImagenes: {type: String},
    };
  }

  constructor() {
    super();
    this.investigador = null;
    this.rutaImagenes = '';
  }

  render() {
    return html`
      <div>
        <div>
          <img src="${this.rutaImagenes}${this.investigador.nombreImagen}" />
        </div>
        <h3>${this.investigador.nombre}</h3>
        <p>${this.investigador.profesion}</p>
        <p>${this.investigador.motivacion}</p>
      </div>
    `;
  }
}

window.customElements.define('ficha-investigador', FichaInvestigador);
