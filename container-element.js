
import { LitElement, html} from 'lit-element';
import './views/main/main-view.js';
import './views/header/header-view.js';
import './views/componentes/ficha-jornada';

export class containerElement extends LitElement {

  static get properties() {
    return {
      jornadaRecogida: { type: Object },
      investigadorRecogido: { type: Object}
    };
  }

  constructor() {
    super();
    this.jornadaRecogida = null;
    this.investigadorRecogido = null;
  }

  handleItemJornadaClick(event) {
    //alert(event.detail.texto);
    this.jornadaRecogida = event.detail;
  }

  handleItemInvestigadorClick(event) {
    //alert(event.detail.nombre);
    this.investigadorRecogido = event.detail;
  }
  
render() {
  return html`
    <div>
      <header-view
        @item-jornada-click=${this.handleItemJornadaClick}
        @item-investigador-click=${this.handleItemInvestigadorClick}
      ></header-view>
      <!-- <main-view></main-view> -->
      <ficha-jornada .jornada=${this.jornadaRecogida}></ficha-jornada>
    </div>
    `;
  }

}

window.customElements.define('container-element', containerElement);
