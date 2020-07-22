import {LitElement, html} from 'lit-element';
import './views/header/header-view.js';
import './views/componentes/ficha-jornada';
import './views/componentes/ficha.investigador';
import './views/componentes/ficha-inicio';
//import {FichaInicio} from './views/componentes/ficha-inicio';

export class containerElement extends LitElement {
  /* static get styles() {
    return css`
      * {
        background-color: #ebf5fb;
      }
    `;
  } */

  static get properties() {
    return {
      jornadaRecogida: {type: Object},
      investigadorRecogido: {type: Object},
      //inicioRecogido: {type: Object},
      cualclicked: {type: String},
    };
  }

  constructor() {
    super();
    this.jornadaRecogida = null;
    this.investigadorRecogido = null;
    //this.inicioRecogido = null;
    this.cualclicked = '';
  }

  handleItemJornadaClick(event) {
    this.jornadaRecogida = event.detail;
    this.cualClicked = 'jornada';
  }

  handleItemInvestigadorClick(event) {
    this.investigadorRecogido = event.detail;
    this.cualClicked = 'investigador';
  }

  /* hadleInicioClick(event) {
    this.inicioRecogido = event.detail;
    this.cualClicked = 'inicio';
  } */

  mostrarCuerpo() {
    switch (this.cualClicked) {
      case 'jornada':
        return html`
          <ficha-jornada .jornada=${this.jornadaRecogida}></ficha-jornada>
        `;
      case 'investigador':
        return html`
          <ficha-investigador
            .investigador=${this.investigadorRecogido}
          ></ficha-investigador>
        `;
      /*  case 'inicio':
        return html`
          <Ficha-inicio .inicio=${this.inicioRecogido}></Ficha-inicio>
        `; */
      default:
        return html` <ficha-inicio></ficha-inicio> `;
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
