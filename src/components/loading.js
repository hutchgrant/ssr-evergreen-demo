import { html, LitElement } from 'lit-element';

class loading extends LitElement {
  render() {
    return html`
      <div>
        Loading...
      </div>
    `;
  }
}

customElements.define('my-loading', loading);