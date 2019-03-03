import { html, LitElement } from 'lit-element';
import css from './home.css';

class HomePageComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>
      <p>Home page!</p>
      </div>
    `;
  }
}

customElements.define('home-page', HomePageComponent);