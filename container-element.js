import {LitElement, html, css} from 'lit-element';
import './views/header/header-view.js';
import './views/componentes/ficha-jornada';
import './views/componentes/ficha.investigador';
import './views/componentes/ficha-inicio';

export class containerElement extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: 'Red Rose';
        background-color: #fef0d2;
      }
      hr {
        margin: 0;
        border: 0;
        height: 1px;
        background: #333;
        background-image: linear-gradient(to right, #ccc, #333, #ccc);
      }
    `;
  }

  static get properties() {
    return {
      jornadaRecogida: {type: Object},
      investigadorRecogido: {type: Object},
      cualclicked: {type: String},
    };
  }

  constructor() {
    super();
    this.jornadaRecogida = null;
    this.investigadorRecogido = null;
    this.cualclicked = '';
  }

  limpiarClicked() {
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

  handleItemInicioClick() {
    this.cualClicked = 'inicio';
    //alert(this.cualClicked);
  }

  mostrarCuerpo() {
    switch (this.cualClicked) {
      case 'jornada':
        return html`
          <ficha-jornada .jornada=${this.jornadaRecogida}></ficha-jornada>
        `;
      case 'investigador':
        return html`
          <ficha-investigador
            .investigador="${this.investigadorRecogido}"
            rutaImagenes="../views/imagenes/"
          ></ficha-investigador>
        `;
      case 'inicio':
        return html`
          <div>
            El principio de todo
          </div>
        `;
      default:
        return html` <ficha-inicio></ficha-inicio>`;
    }
  }

  render() {
    return html`
    <div>
      <header-view
        @item-jornada-click=${this.handleItemJornadaClick}
        @item-investigador-click=${this.handleItemInvestigadorClick}
        @item-inicio-click = ${this.handleItemInicioClick}
      ></header-view>
    </div>
    <div>
      <hr />
      ${this.mostrarCuerpo()}
    </div>
    
    </div>
    `;
  }
}

window.customElements.define('container-element', containerElement);
