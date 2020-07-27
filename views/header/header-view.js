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
        font-family: 'UnifrakturMaguntia', cursive;
        font-size: 1em;
      }
      img{
        width:100%;
        display:block;
      }
      nav {
        background-color: #fef0d2; /*#ffffff*/
        width: 100%;
        height: 4rem;
        display: flex;
        margin:0;
        padding:0;
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
        background-color: #fddb90; /*#ffffff#fdd98b*/
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
    this.handleInicioClick = this.handleInicioClick.bind(this);
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

  handleInicioClick() {
    this.dispatchEvent(
      new CustomEvent('item-inicio-click', {
        detail: 'inicio',
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <img src="../views/imagenes/periodico.png">
      <nav>
        <ul>
          <li @click="${this.handleInicioClick}">Inicio</li>
          <li>
            Jornadas
            <ul>
              ${this.jornadas.map(this.plantillaJornada)}
            </ul>
          </li>
          <li>
            Investigadores
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
