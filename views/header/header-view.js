import { LitElement, html, css } from 'lit-element';
import '../componentes/list-item.js';
import { jornadas as jornadasDatos, investigadores as investigadoresDatos} from '../ayuda/datos.js';

export class headerView extends LitElement {
  
  static get properties() {
    return {
      jornadas: { type: Array },
      investigadores: { type: Array}
    };
  }

  constructor() {
    super();
    this.jornadas = jornadasDatos;
    this.investigadores = investigadoresDatos;
  }

  static get styles() {
    return css`
      div { display: flex; }
    `;
  }

  render() {
    return html`
    <div>
      <ul>
        ${this.jornadas.map(i => html`<list-item itemText=${i.nombre}></list-item>`)}
      </ul>
      <ul>
        ${this.investigadores.map(i => html`<list-item itemText=${i.nombre}></list-item>`)}
      </ul>
    </div>
    `;
  }

}

window.customElements.define('header-view', headerView);
