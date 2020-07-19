import {LitElement, html} from 'lit-element';

export class mainView extends LitElement {
  render() {
    return html` <div>Este es el main</div> `;
  }
}

window.customElements.define('main-view', mainView);
