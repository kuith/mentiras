import { LitElement, html, css } from 'lit-element';

export class FichaInvestigador extends LitElement {

  static get styles() {
    return css`
      div {
        margin: 1.5em;
        font-family: 'Red Rose', cursive;
      }
    `;
  }

  static get properties() {
    return {
      investigador: { type: Object }
    };
  }

  constructor() {
    super();
    this.investigador = null;
  }

  render() {
    return html`
      <div>
        <h3>${this.investigador.nombre}</h3>
        <p>${this.investigador.profesion}</p>
        
      </div>
    `;
  }

}

window.customElements.define('ficha-investigador', FichaInvestigador);
