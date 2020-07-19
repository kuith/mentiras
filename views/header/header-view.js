import {LitElement, html, css} from 'lit-element';
import './item-jornada.js';
import './item-investigador.js';
import {
  jornadas as jornadasDatos,
  investigadores as investigadoresDatos,
} from '../ayuda/datos.js';

export class headerView extends LitElement {
  static get properties() {
    return {
      jornadas: {type: Array},
      investigadores: {type: Array},
    };
  }

  constructor() {
    super();
    this.jornadas = jornadasDatos;
    this.investigadores = investigadoresDatos;
    this.plantillaJornada = this.plantillaJornada.bind(this);
    this.plantillaInvestigador = this.plantillaInvestigador.bind(this);
  }

  static get styles() {
    return css`
      div {
        display: flex;
      }
    `;
  }

  plantillaJornada(jornada) {
    return html`<item-jornada
      .jornada=${jornada}
      @item-jornada-click=${this.handleItemJornadaClick}
    ></item-jornada>`;
  }

  plantillaInvestigador(investigador) {
    return html` <item-investigador
      .investigador=${investigador}
      @item-investigador-click=${this.handleItemInvestigadorClick}
      ></item-investigador>`;
  }

  /* handleItemJornadaClick(event) {
    //alert(event.detail.texto);
  } */

  render() {
    return html`
      <div>
        <ul>
          ${this.jornadas.map(this.plantillaJornada)}
        </ul>
        <ul>
          ${this.investigadores.map(this.plantillaInvestigador)}
        </ul>
      </div>
    `;
  }
}

window.customElements.define('header-view', headerView);
