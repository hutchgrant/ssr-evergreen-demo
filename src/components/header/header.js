import { html, LitElement } from 'lit-element';
import css from './header.css';
import logo from './logo.png';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>
        <a id="logo" href="https://projectevergreen.github.io/" title="Project Evergreen home link" style="background-image: url(${logo})">&nbsp;</a>
        <h1>
          <small>Welcome to</small>
          Create&nbsp;Evergreen&nbsp;App!</h1>
          <h2><strong>SSR Example App</strong></h2>
          <ul>
            <li>
              <a href="/" aria-label="menu-item">Home Page</a>
            </li>
            <li>
              <a href="/docs" aria-label="menu-item">Docs Page</a>
            </li>
          </ul>
      </header>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);