import {LitElement, html, css} from 'lit-element';
import './item-jornada.js';
import './item-investigador.js';
import {
  jornadas as jornadasDatos,
  investigadores as investigadoresDatos,
} from '../ayuda/datos.js';

export class headerView extends LitElement {
  static get styles() {
    return css`
      *{
        font-family: 'Red Rose', cursive;
      }
      nav {
        display: flex;
      }
      li{
        list-style: none;
      }
    `;
  }

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

  render() {
    return html`
      <nav>
        <ul>
          <li>Jornadas
            <ul>
              ${this.jornadas.map(this.plantillaJornada)}
            </ul>
          </li>
          <li>investigadores
            <ul>
              ${this.investigadores.map(this.plantillaInvestigador)}
            </ul>
          </li>
        </ul>
      </nav>
    `;
  }
}

window.customElements.define('header-view', headerView);





/* render() {
  return html`
      <div>
      <nav>
        <ul>
          ${this.jornadas.map(this.plantillaJornada)}
        </ul>
        <ul>
          ${this.investigadores.map(this.plantillaInvestigador)}
        </ul>
        </nav>
      </div>
    `;
}
} */