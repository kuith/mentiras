
import { LitElement, html} from 'lit-element';
import './views/main/main-view.js';
import './views/header/header-view.js';

export class containerElement extends LitElement {

  handleItemJornadaClick(event) {
    alert(event.detail.texto);
  }
  
render() {
  return html`
    <div>
      <header-view @item-jornada-click=${this.handleItemJornadaClick}></header-view>
      <main-view></main-view>
    </div>
    `;
  }

}

window.customElements.define('container-element', containerElement);
