# javascript-dictionary

## Table of content:
1. [Scope and Closure](Scope&Closure.md)
1. [This](this.md)
1. [Object](Object.md)


Dictionary:

## C:

#### ```Coercion```
Coercion - it's implicit converting a value from one type to another.
https://github.com/dorey/JavaScript-Equality-Table

#### ```Callback```
The function that should be called when relative event executes.


## E:

#### ```Event loop```
The mechanism that performs moving functions from
the event queue to stack when stack becomes empty.

#### ```Event queue```
One of the part js execution enviroment, that contain queue of event,
that are ready to execution. These event were moved to queue from WebApis (for browsers),
and are waiting to be moved to ```stack``` by ```event loop```


## I:

#### ```Infinity```
```js
var a = 1 / 0;	// Infinity
var b = -1 / 0;	// -Infinity

var a = Number.MAX_VALUE;	// 1.7976931348623157e+308
a + a;						        // Infinity
a + Math.pow( 2, 970 );		// Infinity
a + Math.pow( 2, 969 );		// 1.7976931348623157e+308
```

## J:

#### JSON-safe:
Json-safe values consist of values that can be represented as JSON.
Not Json-safe: ```undefineds```, ```functions```, ```symbols```, and objects with circular references.


```js
```


## M:

#### ```Mixins``` 


## P:

#### ```Parasitic inheritance```


## O:

#### ```OLOO```
- (objects-linked-to-other-objects) is a code style which creates and relates objects directly without the abstraction of classes. OLOO quite naturally implements [[Prototype]]-based behavior delegation.


## T:

#### ```Typeof``` 
operator inspects the type of the given value
Example:
```js
typeof undefined       // "undefined"
typeof true            // "boolean"
typeof 42              // "number"
typeof "42"            // "string"
typeof { life: 42 }    // "object"
typeof null            // "object"
typeof function a(){}  // "function"
typeof new String("s") // "object"
// added in ES6!
typeof Symbol()        //  "symbol"
```

#### ```Types```:
JavaScript defines seven built-in types: ```null```, ```undefined```, ```boolean```, ```number```, ```string```, ```object```, ```symbol```.


## N:

#### ```Numbers```
JavaScript's numbers is based on the "IEEE 754" standard, often called "floating-point." JavaScript specifically uses the "double precision" format (aka "64-bit binary").

#### ```Number.MAX_VALUE```
The maximum integer that can "safely" be represented is ```2^53 - 1```, which is ```9007199254740991```


## S:

#### ```Symbol```


