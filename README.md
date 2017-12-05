# Neutrino Markdown Loader

`neutrino-middleware-markdown-loader` is Neutrino middleware for loading and importing HTML files from modules.

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![Join the Neutrino community on Spectrum][spectrum-image]][spectrum-url]

## Requirements

- Node.js v6.10+
- Yarn or npm client
- Neutrino v7

## Installation

`neutrino-middleware-markdown-loader` can be iunstalled via the Yarn or npm clients.

#### Yarn

```bash
❯ yarn add neutrino-middleware-markdown-loader
```

#### npm

```bash
❯ npm install --save neutrino-middleware-markdown-loader
```

## Usage

`neutrino-middleware-markdown-loader` can be consumed from the Neutrino API, middleware, or presets. Require this package
and plug it into Neutrino:

```js
// Using function middleware format
const md = require('neutrino-middleware-markdown-loader');

// Use with default options
neutrino.use(md);

// Usage showing default options
neutrino.use(md, {
  name: '[name].[ext]'
});
```

```js
// Using object or array middleware format

// Use with default options
module.exports = {
  use: ['neutrino-middleware-markdown-loader']
};

// Usage showing default options
module.exports = {
  use: [
    ['neutrino-middleware-markdown-loader', {
      name: '[name].[ext]'
    }]
  ]
};
```

The options object passed to this middleware will be passed as options to the markdown-loader used to load Markdown files.

## Customization

`neutrino-middleware-markdown-loader` creates some conventions to make overriding the configuration easier once you are
ready to make changes.

### Rules

The following is a list of rules and their identifiers which can be overridden:

| Name | Description | Environments and Commands |
| --- | --- | --- |
| `markdown` | Allows importing HTML files from modules. Contains a single loader named `markdown`. | all |

## Contributing

Of course you're welcome!