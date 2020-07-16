import {LitElement, html} from 'lit-element';
import '../componentes/parrafo-texto.js';
import '../componentes/parrafo-lista.js';

export class mainView extends LitElement {
  render() {
    return html`
      <parrafo-texto></parrafo-texto>
      <br />
      <parrafo-lista></parrafo-lista>
    `;
  }
}

window.customElements.define('main-view', mainView);
