# SSR Evergreen Demo App

This is an experimental demonstration of how server side rendering could be done with webcomponents using lit-element and rendertron(puppeteer). This is not ideal, it's simply one method to server-side render(pre-render). It does serialize shadow dom components and sends a modifiable string to the client's browser.

**[A Project Evergreen Experiment](https://github.com/ProjectEvergreen)**

## Usage

```
git clone https://github.com/hutchgrant/ssr-evergreen-demo
cd ssr-evergreen-demo
npm run prod
```

Browse to http://localhost:3000 check your network tab for the localhost request and see the response contains all visible components pre-rendered in html.

### How it works

An application is built with webpack and then served via a local web server concurrently with a node express server.  Once a request is received, the express server relays the request to puppeteer, which navigates(with some rendertron preloaded configuration) to the local web server. The resulting page can now be modified easily with anything you need to be done on the server via JSDOM, serialized, and sent back to the client.

### TODO

* get development working properly with webpack-dev-server and HMR
* some form of caching of pre-rendered pages

### License

Released under the MIT license