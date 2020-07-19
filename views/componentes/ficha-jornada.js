import { LitElement, html, css } from 'lit-element';

export class FichaJornada extends LitElement {

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
      jornada: { type: Object }
    };
  }

  constructor() {
    super();
    this.jornada = null;
  }

  render() {
    return html`
      <div>
        <h3>${this.jornada.nombre}</h3>
        <p>${this.jornada.texto}</p>
        
      </div>
    `;
  }

}

window.customElements.define('ficha-jornada', FichaJornada);
