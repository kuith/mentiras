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
        background-color: #f0e3c7;
      }
      .basicos3 {
        padding: 0.5em;
        white-space: pre-line;
        margin-left: 1%;
        width: 60%;
        background-color: #f0e3c7;
      }
      img {
        width: 100%;
      }

      .contenedorGeneral {
        margin: 0.5em 1em 0.5em 1em;
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .contenedorPilares {
        width: 50%;
        padding: 0.5em;
        background-color: #f0e3c7;
      }
      .contenedorFuentes {
        width: 50%;
        padding: 0.5em;
        margin-left: 1%;
        background-color: #f0e3c7;
      }
      .contenedor1 {
        width: 33.33%;
        padding: 0.5em;
        background-color: #f0e3c7;
      }
      .contenedor2 {
        width: 33.33%;
        padding: 0.5em;
        margin-left: 1%;
        background-color: #f0e3c7;
      }
      .contenedor3 {
        width: 100%;
        padding: 0.5em;
        background-color: #f0e3c7;
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
        <div class="basicos1">
          <img src="${this.rutaImagenes}${this.investigador.nombreImagen}" />
        </div>
        <div class="basicos2">
          <h1>${this.investigador.nombre}</h1>
          <h3>Profesión: ${this.investigador.profesion}</h3>
          <h3>Motivación: ${this.investigador.motivacion}</h3>
          <p>Salud: ${this.investigador.salud}</p>
          <p>Estabilidad: ${this.investigador.estabilidad}</p>
          <p>Cordura: ${this.investigador.cordura}</p>
        </div>
        <div class="basicos3">
          <h3>Beneficios de la profesión</h3>
          ${this.investigador.beneficios}
        </div>
      </div>
      <!-- pilares, fuentes, transfondo, personalidad, vinculo -->
      <div class="contenedorGeneral">
        <div class="contenedorPilares">
          <h3>Pilares de cordura</h3>
          ${this.investigador.pilares}
        </div>
        <div class="contenedorFuentes">
          <h3>Fuentes de estabilidad</h3>
          ${this.investigador.fuentes}
        </div>
      </div>

      <div class="contenedorGeneral">
        <div class="contenedor1">
          <h3>Transfondo</h3>
          ${this.investigador.trasfondo}
        </div>
        <div class="contenedor2">
          <h3>Personalidad</h3>
          ${this.investigador.personalidad}
        </div>
        <div class="contenedor2">
          <h3>Vínculo</h3>
          ${this.investigador.vinculo}
        </div>
      </div>
      <!-- academicas, interpersonales, tecnicas, generales -->
      <div class="contenedorGeneral">
        <div class="contenedor1">
          <h3>Habilidades Académicas</h3>
          ${this.investigador.academicas}
        </div>
        <div class="contenedor2">
          <h3>Habilidades Interpersonales</h3>
          ${this.investigador.interpersonales}
        </div>
        <div class="contenedor2">
          <h3>Habilidades Técnicas</h3>
          ${this.investigador.tecnicas}
        </div>
      </div>
      <!-- generales -->
      <div class="contenedorGeneral">
        <div class="contenedor3">
          <h3>Habilidades Generales</h3>
          ${this.investigador.generales}
        </div>
      </div>
    `;
  }
}

window.customElements.define('ficha-investigador', FichaInvestigador);
