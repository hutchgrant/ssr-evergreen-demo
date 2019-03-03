import { html, LitElement } from 'lit-element';
import css from './docs.css';

class DocsPageComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        <p>Docs page!</p>
      </div>
    `;
  }
}

customElements.define('docs-page', DocsPageComponent);