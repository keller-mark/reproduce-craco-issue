
Ensure `type: module` in package.json


Added this in `craco.config.js` `webpack` object:

```
configure: {
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
        ],
      },
},
```


Modify `package.json` `scripts.test`:

```
"test": "NODE_OPTIONS=--experimental-vm-modules craco test",
```


Node version: 20.2.0
NPM version: 9.6.6