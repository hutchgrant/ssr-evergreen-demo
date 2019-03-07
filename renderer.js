import { JSDOM } from 'jsdom';
import * as puppeteer from 'puppeteer';
import { Renderer } from './rendertron';

export default ({ absPath }) => async (req, res) => {

  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);

  if (req.originalUrl.indexOf('.') === -1) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });

    const renderer = new Renderer(browser);
    let result = await renderer.serialize(absPath);

    // console.log(result.content);

    const dom = new JSDOM(result.content);

    /* Manipulate the dom from server */
    // dom.window.document.head
    //   .insertAdjacentHTML('beforeend', '<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js"></script>');
    // dom.window.document.body.insertAdjacentHTML('beforeend', js);

    res.send(dom.serialize());
  } else {
    res.send('');
  }

};