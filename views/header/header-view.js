import {LitElement, html, css} from 'lit-element';
import './item-jornada.js';
import './item-investigador.js';
import '../componentes/ficha-inicio.js';
import {
  jornadas as jornadasDatos,
  investigadores as investigadoresDatos,
} from '../ayuda/datos.js';

export class headerView extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        font-family: 'Red Rose', cursive;
      }
      nav {
        background-color: #ebf5fb; /*#ffffff*/
        width: 100%;
        height: 4rem;
        display: flex;
      }
      nav ul {
        float: left;
        display: flex;
      }

      nav ul li {
        float: left;
        /*list-style: none;*/
        position: relative;
      }

      nav ul li {
        display: block;
        padding: 0rem 2rem;
        line-height: 2rem;
        color: #0a0a0a;
        text-decoration: none;
      }

      nav ul li ul {
        display: none;
        position: absolute;
        border: 1px solid #cccccc;
        background-color: #d4e6f1; /*#ffffff*/
        padding: 0rem 1rem;
        width: 100%;
      }

      nav ul li:hover ul {
        display: block;
      }

      nav ul li ul li {
        width: 100%;
      }

      nav ul li ul li {
        padding: 1rem 2rem;
        line-height: unset;
        white-space: nowrap;
      }

      nav ul li ul li:hover {
        background-color: red; /*#efefef*/
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
    //this.plantillaInicio = this.plantillaInicio(this);
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

  /*  plantillaInicio(inicio) {
    return html` <ficha-inicio
      .inicio=${inicio}
      @ficha-inicio-click=${this.handleInicioClick}
    >
    </ficha-inicio>`;
  } */

  render() {
    return html`
      <nav>
        <ul>
          <li>Inicio</li>
          <li>
            Jornadas
            <ul>
              ${this.jornadas.map(this.plantillaJornada)}
            </ul>
          </li>
          <li>
            investigadores
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
