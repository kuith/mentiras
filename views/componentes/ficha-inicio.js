import {LitElement, html, css} from 'lit-element';

export class FichaInicio extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      inicio: {type: Object},
    };
  }

  constructor() {
    super();
    this.inicio = null;
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('item-jornada-click', {
        detail: this.inicio,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <li @click="${this.handleClick}">
        Pantalla inicial
      </li>
    `;
  }
}

window.customElements.define('ficha-inicio', FichaInicio);
