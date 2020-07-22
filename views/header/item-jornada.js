import {LitElement, html, css} from 'lit-element';

export class ItemJornada extends LitElement {
  static get styles() {
    return css`
      li {
        list-style: none;
        /*font-family: 'Red Rose', cursive;*/
      }
    `;
  }

  static get properties() {
    return {
      jornada: {type: Object},
    };
  }

  constructor() {
    super();
    this.jornada = null;
  }

  handleClick() {
    this.dispatchEvent(
      //lanza evento
      new CustomEvent('item-jornada-click', { //nombre del evento que lanzo
        //evento personalizado con nombre y objeto con propiedades del evento
        detail: this.jornada, // informacion a transmitir (objetos, texto...)
        bubbles: true, // permitir propagar evento hasta la barrera del shadow dom
        composed: true, // para atravesar la barrera del shadow dom
      })
    );
  }

  render() {
    return html` <li @click="${this.handleClick}">${this.jornada.nombre}</li> `;
  }
}

window.customElements.define('item-jornada', ItemJornada);
