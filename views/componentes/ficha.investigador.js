import {LitElement, html, css} from 'lit-element';

export class FichaInvestigador extends LitElement {
  static get styles() {
    return css`
      .contenedorImagenBasicos {
        margin: 1.5em;
        /*width: 95%;*/
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .item1 {
        /*flex-grow: 1;*/
        width: 10%;
        padding: 1em;
        margin-left: 1%;
      }

      .item2 {
        /*flex-grow: 2;*/
        width: 30%;
        padding: 1em;
        margin-left: 1%;
      }

      .item3 {
        /*flex-grow: 2;*/
        width: 60%;
        padding: 1em;
        margin-left: 1%;
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
      <div class="contenedorImagenBasicos">
        <div class="item1" style="background-color:blue">
          <img src="${this.rutaImagenes}${this.investigador.nombreImagen}" />
        </div>
        <div class="item2" style="background-color:green">
          <h1>${this.investigador.nombre}</h1>
          <h3>Profesión: ${this.investigador.profesion}</h3>
          <h3>Motivación: ${this.investigador.motivacion}</h3>
          <p>Salud: ${this.investigador.salud}</p>
          <p>Estabilidad: ${this.investigador.estabilidad}</p>
          <p>Cordura: ${this.investigador.cordura}</p>
        </div>
        <div class="item3" style="background-color:red">
          <h3>Beneficios de la profesión</h3>
          ${this.investigador.beneficios}
        </div>
      </div>
    `;
  }
}

window.customElements.define('ficha-investigador', FichaInvestigador);
