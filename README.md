# babel-plugin-transform-negative-indices

Turn negative array indices into offsets from the end of the array.

## Installation

```sh
$ npm install babel-plugin-transform-negative-indices
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-negative-indices"]
}
```

### Via CLI

```sh
$ babel --plugins transform-negative-indices script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-negative-indices"]
});
```