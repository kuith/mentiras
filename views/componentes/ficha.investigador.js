import {LitElement, html, css} from 'lit-element';

export class FichaInvestigador extends LitElement {
  static get styles() {
    return css`
      * {
        text-align: justify;
      }
      .contenedorImagenBasicos {
        margin: 1em;
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .basicos1 {
        width: 15%;
        padding: 0em;
      }
      .basicos2 {
        width: 25%;
        padding: 0.5em;
        margin-left: 1%;
      }
      .basicos3 {
        padding: 0.5em;
        white-space: pre-line;
        margin-left: 1%;
        width: 60%;
      }
      img {
        width: 100%;
      }

      .contenedorPilaresFuentes {
        margin: 0.5em 1em 0.5em 1em;
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .contenedorPilares {
        width: 50%;
        padding: 0.5em;
      }
      .contenedorFuentes {
        width: 50%;
        padding: 0.5em;
        margin-left: 1%;
      }

      .contenedorTrasfondoPersonalidadVinculo {
        margin: 0.5em 1em 0.5em 1em;
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .contenedor1 {
        width: 33.33%;
        padding: 0.5em;
      }
      .contenedor2 {
        width: 33.33%;
        padding: 0.5em;
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
        <div class="basicos1" style="background-color:blue">
          <img src="${this.rutaImagenes}${this.investigador.nombreImagen}" />
        </div>
        <div class="basicos2" style="background-color:green">
          <h1>${this.investigador.nombre}</h1>
          <h3>Profesión: ${this.investigador.profesion}</h3>
          <h3>Motivación: ${this.investigador.motivacion}</h3>
          <p>Salud: ${this.investigador.salud}</p>
          <p>Estabilidad: ${this.investigador.estabilidad}</p>
          <p>Cordura: ${this.investigador.cordura}</p>
        </div>
        <div class="basicos3" style="background-color:red">
          <h3>Beneficios de la profesión</h3>
          ${this.investigador.beneficios}
        </div>
      </div>
      <!-- pilares, fuentes, transfondo, personalidad, vinculo -->
      <div class="contenedorPilaresFuentes" style="background-color:pink">
        <div class="contenedorPilares"  style="background-color:blue">
          <h3>Pilares de cordura</h3>
          ${this.investigador.pilares}
        </div>
        <div class="contenedorFuentes"  style="background-color:orange">
          <h3>Fuentes de estabilidad</h3>
          ${this.investigador.fuentes}
        </div>
      </div>

      <div class="contenedorTrasfondoPersonalidadVinculo" style="background-color:yellow">
        <div class="contenedor1" style="background-color:orange">
          <h3>Transfondo</h3>
          ${this.investigador.trasfondo}
        </div>
        <div class="contenedor2" style="background-color:blue">
          <h3>Personalidad</h3>
          ${this.investigador.personalidad}
        </div>
        <div class="contenedor2" style="background-color:red">
          <h3>Vínculo</h3>
          ${this.investigador.vinculo}
        </div>
      </div>
    `;
  }
}

window.customElements.define('ficha-investigador', FichaInvestigador);
