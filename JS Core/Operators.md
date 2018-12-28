## Operators

### ```Abstract Equality```
The == operator's behavior is defined as "The Abstract Equality Comparison Algorithm" in section 11.9.3 of the ES5 spec.
The comparison x == y, where x and y are values, produces true or false.

x  |  y  | result
---|-----|--------
undefined | undefined | true
null | null | true
null | undefined | true
NaN | any | false
+0 | -0 | true
object | object | are refs equal
number | string | number == toNumber(string)
bool | any | toNumber(bool) == any
string | object | string == toPrimitive(object)
number | object | number == toPrimitive(object)

Comparison in reverse order are the same
any another comparison are false


### ```Typeof```

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
