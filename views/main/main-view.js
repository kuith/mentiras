import {LitElement, html} from 'lit-element';
import '../componentes/parrafo-texto.js';
import '../componentes/parrafo-lista.js';

export class mainView extends LitElement {
  render() {
    return html` <div>Este es el main</div> `;
  }
}

window.customElements.define('main-view', mainView);
