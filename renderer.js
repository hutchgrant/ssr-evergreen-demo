import { JSDOM } from 'jsdom';
import * as puppeteer from 'puppeteer';
import { Renderer } from './rendertron';

const pages = [];

export default ({ absPath }) => async (req, res) => {

  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);

  if (req.originalUrl.indexOf('.') === -1) {

    let page = pages.filter(file => {
      return file.page = req.originalUrl;
    });

    if (page.length === 0) {
      page = { page: req.originalUrl, data: '' };

      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
      });

      const renderer = new Renderer(browser);

      let result = await renderer.serialize(absPath + req.originalUrl);

      const dom = new JSDOM(result.content);

      /* Manipulate the dom from server */
      // dom.window.document.head
      //   .insertAdjacentHTML('beforeend', '<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js"></script>');
      // dom.window.document.body.insertAdjacentHTML('beforeend', js);

      page.data = dom.serialize();
      pages.push(page);
      return res.send(page.data);
    }
    return res.send(page[0].data);
  }
  return res.send('');
};