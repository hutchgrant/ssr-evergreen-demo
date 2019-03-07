/*
* Rendertron - Modified
* Repo: https://github.com/GoogleChrome/rendertron
* License: Apache 2.0
*/

// "use strict";
// Object.defineProperty(exports, '"__esModule', { value: true });
/**
 * Wraps Puppeteer's interface to Headless Chrome to expose high level rendering
 * APIs that are able to handle web components and PWAs.
 */
class Renderer {
  constructor(browser) {
    this.browser = browser;
  }
  async serialize(requestUrl) {

    const page = await this.browser.newPage();

    // Page may reload when setting isMobile
    // https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagesetviewportviewport
    page.evaluateOnNewDocument('customElements.forcePolyfill = true');
    page.evaluateOnNewDocument('ShadyDOM = {force: true}');
    page.evaluateOnNewDocument('ShadyCSS = {shimcssproperties: true}');
    let response = null;

    // Capture main frame response. This is used in the case that rendering
    // times out, which results in puppeteer throwing an error. This allows us
    // to return a partial response for what was able to be rendered in that
    // time frame.
    page.addListener('response', (r) => {
      if (!response) {
        response = r;
      }
    });
    try {
      // Navigate to page. Wait until there are no oustanding network requests.
      response = await page.goto(requestUrl, { timeout: 10000, waitUntil: 'networkidle0' });
    } catch (e) {
      console.error(e);
    }
    if (!response) {
      console.error('response does not exist');
      // This should only occur when the page is about:blank. See
      // https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#pagegotourl-options.
      return { status: 400, content: '' };
    }
    // Disable access to compute metadata. See
    // https://cloud.google.com/compute/docs/storing-retrieving-metadata.
    if (response.headers()['metadata-flavor'] === 'Google') {
      return { status: 403, content: '' };
    }
    // Set status to the initial server's response code. Check for a <meta
    // name="render:status_code" content="4xx" /> tag which overrides the status
    // code.
    let statusCode = response.status();
    const newStatusCode = await page
      .$eval('meta[name="render:status_code"]', (element) => parseInt(element.getAttribute('content'), 10) || '')
      .catch(() => undefined);

    // On a repeat visit to the same origin, browser cache is enabled, so we may
    // encounter a 304 Not Modified. Instead we'll treat this as a 200 OK.
    if (statusCode === 304) {
      statusCode = 200;
    }
    // Original status codes which aren't 200 always return with that status
    // code, regardless of meta tags.
    if (statusCode === 200 && newStatusCode) {
      statusCode = newStatusCode;
    }
    // Serialize page.
    const result = await page.evaluate('document.firstElementChild.outerHTML');

    await page.close();

    return { status: statusCode, content: result };
  }
}
exports.Renderer = Renderer;