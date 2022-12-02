# Getting Started with Create React App


## Install the widget

To install the widget you need to have an npm token. To obtain it, please contact us on our [Discord](https://discord.com/invite/XxCpfZQ7tg).
Then create a `.npmrc` file at the root of your repository and provide the token in it

```
//registry.npmjs.org/:_authToken=
```

## Transpile module
Adding the widget in NextJS requires adding the transpile module package

Why ?

This plugin aims to solve the following challenges:
- code transpilation from local packages (think: a monorepo with a styleguide package)
- code transpilation from NPM modules using ES6 imports (e.g lodash-es)

```sh
yarn add next-transpile-modules
```

Then on `next.config.js` file, add the following to import the widget as a transpiled module
```js
const withTM = require("next-transpile-modules")(["@0xsquid/widget"]);

const nextConfig = {
  // Your nextjs config
};

module.exports = withTM(nextConfig);

```


## Widget

You can use the widget with default values like this

```js
import { SquidWidget } from '@0xsquid/widget';
// ...
<SquidWidget />
```

If you want to customize it, you can use our playground and also take a look at our [documentation](https://docs.0xsquid.com/widget/customisation).

Example
```js
<SquidWidget config={ 
    companyName:"Squid",
    slippage:3,
    // customization config
} />
```