# javascript-dictionary

## Table of content:
1. [Scope and Closure](Scope&Closure.md)
1. [This](this.md)
1. [Object](Object.md)


Dictionary:
## A:
## B:

## C:

#### ```Closure```
Closure is when a function is able to remember and access its ```lexical scope``` even when that function is executing outside its lexical scope.
[More about Scope and Closure](Scope&Closure.md)

#### ```Coercion```
Coercion - it's implicit converting a value from one type to another.
https://github.com/dorey/JavaScript-Equality-Table

#### ```Callback```
The function that should be called when relative event executes.

## D:

#### ```Duck typing```
General term for "type checks" that make assumptions about a value's "type"
based on its shape (what properties are present).
"If it looks like a duck, and quacks like a duck, it must be a duck".


## E:

#### ```Event loop```
The mechanism that performs moving functions from
the event queue to stack when stack becomes empty.

#### ```Event queue```
One of the part js execution enviroment, that contain queue of event,
that are ready to execution. These event were moved to queue from WebApis (for browsers),
and are waiting to be moved to ```stack``` by ```event loop```

## H:

#### Hoisting
Moving all declarations to their respective scopes.
[More about Scope and Closure](Scope&Closure.md)


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

#### ```Iterator```
An object that can be iterable inside a loop, like ```array```.

```js
  const iterableObject = {
    to: 3,
    [Symbol.iterator]() {
      const to = this.to
      let current = 0
      return {
        next() {
          current++
          return {
            done: current > to,
            value: current,
          }
        }
      }
    }
  }

  console.log(...iterableObject) // 1 2 3

  for (let num of iterableObject) {
    console.log(num) // 1 2 3
  }
```


## J:

#### JSON-safe:
Json-safe values consist of values that can be represented as JSON.
Not Json-safe: ```undefineds```, ```functions```, ```symbols```, and objects with circular references.


```js
```


## M:

#### ```Mixins``` 


## O:

#### ```OLOO```
Objects-linked-to-other-objects is a code style which creates and relates objects directly without the abstraction of classes. OLOO quite naturally implements [[Prototype]]-based behavior delegation.
[More about objects](Object.md)


## P:

#### ```Parasitic inheritance```

#### ```Promise```
It's a special JavaScript object that resovles ```async code``` by execute
depanding on event code after event trigers. Also it allows handle errors and combines ```async code```
by some conditions, like waiting on all event, etc.

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
```

#### ```Promise.all```
Wait the moment when each promime will be ready.

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);
```

#### ```Promise.race```
Wait the moment when first promime will be ready or will be rejected.
```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert);
```


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

