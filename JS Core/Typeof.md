## Typeof

Operator that inspects the type of the given value

Example:
```js
typeof undefined       // 'undefined'
typeof true            // 'boolean'
typeof 42              // 'number'
typeof '42'            // 'string'
typeof { life: 42 }    // 'object'
typeof null            // 'object'
typeof function a(){}  // 'function'
typeof new String("s") // 'object'
// added in ES6!
typeof Symbol()        //  'symbol'
```
