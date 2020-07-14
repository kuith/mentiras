import { LitElement, html } from 'lit-element';
import '../componentes/list-item.js';

export class headerView extends LitElement {
  static get properties() {
    return {
      jornadas: { type: Array },
      investigadores: { type: Array}
    };
  }

  constructor() {
    super();
    this.jornadas = ['jornada 0', 'jornada 1'];
    this.investigadores = ['investigador 1', 'investigador 2', 'investigador 3'];
  }

  render() {
    return html`
      ${this.jornadas.map(i => html`<list-item itemText=${i}></list-item>`)}
      ${this.investigadores.map(i => html`<list-item itemText=${i}></list-item>`)}
    `;
  }

}

window.customElements.define('header-view', headerView);
