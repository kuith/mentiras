import {LitElement, html, css} from 'lit-element';
import '../componentes/item-jornada.js';
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

  handleItemJornadaClick(event) {
    //alert(event.detail.texto);
  }

  render() {
    return html`
      <div>
        <ul>
          ${this.jornadas.map(this.plantillaJornada)}
        </ul>
        <!-- <ul>
        ${this.investigadores.map(
          (i) => html`<list-item itemText=${i.nombre}></list-item>`
        )}
      </ul> -->
      </div>
    `;
  }
}

window.customElements.define('header-view', headerView);
