# Getting Started with Create React App


## Install the widget

To install the widget you'll need to have an `integratorId`.  
To get one, please fill the form here: [Typeform](https://l19g3aali76.typeform.com/integrator-id)  
This integratorId will help us for on-chain analytics.  
Later, you'll be able to access a dashboard to see your tx volume going through this widget.

Once you have your integratorId, you can use it directly in the widget's config object:


```js
<SquidWidget config={ 
    // ...
    integratorId: "your-integrator-id"
} />
```

## Rewire

Squid widget is using some packages such as `@cosmjs`, this package is using third party libraries such as `crypto` & `path`.

These third party libraries used to be included by webpack in previous versions of create-react-app.

This is no longer the case. This is why we need to use `create-react-app-rewired` to have the widget working without errors

This adds some polyfills for browser (you can see them in package.json) and also a config file `config-overrides.js` which will load these polyfills

```js
module.exports = function override(config, env) {
    config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
    };
    return config;
}
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
    integratorId: "your-integrator-id"
    // customization config
} />
```