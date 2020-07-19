import { LitElement, html, css } from 'lit-element';

export class ItemInvestigador extends LitElement {

  static get styles() {
    return css`
      li {
        margin: 0.5em;
        list-style: none;
        font-family: 'Red Rose', cursive;
      }
    `;
  }

  static get properties() {
    return {
      investigador: { type: Object }
    };
  }

  constructor() {
    super();
    this.investigador = null;
  }

  handleClick() {
    this.dispatchEvent( 
      new CustomEvent( 
        "item-investigador-click", {
          detail: this.investigador,
          bubbles: true, 
          composed: true 
        }
      )
    );

  }

  render() {
    return html`
      <li @click="${this.handleClick}">${this.investigador.nombre} </li>
    `;
  }

}

window.customElements.define('item-investigador', ItemInvestigador);
