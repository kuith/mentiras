
import { LitElement, html} from 'lit-element';
import './views/header/header-view.js';
import './views/componentes/ficha-jornada';
import './views/componentes/ficha.investigador';

export class containerElement extends LitElement {

  static get properties() {
    return {
      jornadaRecogida: { type: Object },
      investigadorRecogido: { type: Object },
      cualclicked: { type: String }
    };
  }

  constructor() {
    super();
    this.jornadaRecogida = null;
    this.investigadorRecogido = null;
    this.cualclicked = "";
  }

  handleItemJornadaClick(event) {
    this.jornadaRecogida = event.detail;
    this.cualclicked = 'jornada';
  }

  handleItemInvestigadorClick(event) {
    this.investigadorRecogido = event.detail;
    this.cualclicked = 'investigador';
  }

  mostrarCuerpo() {
    switch (this.cualclicked) {
      case 'jornada':
        return html`
          <ficha-jornada .jornada=${this.jornadaRecogida}></ficha-jornada>
          `;
      case 'investigador':
        return html`
          <ficha-investigador .investigador=${this.investigadorRecogido}></ficha-investigador>
          `;
      default:
        return html`
          <p>A la espera de que hagas click</p>
          `;
    }
  }
  
render() {
  return html`
    <div>
      <header-view
        @item-jornada-click=${this.handleItemJornadaClick}
        @item-investigador-click=${this.handleItemInvestigadorClick}
      ></header-view>
    </div>
    <div>
      ${this.mostrarCuerpo()}
    </div>
    
    </div>
    `;
  }

}

window.customElements.define('container-element', containerElement);
