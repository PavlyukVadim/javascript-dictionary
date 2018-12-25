# javascript-dictionary

## Table of content:
1. [Scope and Closure](Scope&Closure.md)
1. [This](this.md)
1. [Object](Object.md)


Dictionary:
## A:

#### ```Abstract Equality```
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

!comparison in reverse order are the same
any another comparison are false

#### ```AJAX```

#### ```Arrow Functions```

#### ```Authentication```
Who you are. (login + password)

#### ```Authorization```
What you are allowed to do. (permissions)


## B:

#### ```BDD```


## C:

#### ```Callback```
The function that should be called when relative event executes.

#### ```Class```

#### ```Closure```
Closure is when a function is able to remember and access its ```lexical scope``` even when that function is executing outside its lexical scope.
[More about Scope and Closure](Scope&Closure.md)

#### ```Cookie```

#### ```Coercion```
Coercion - it's implicit converting a value from one type to another.
https://github.com/dorey/JavaScript-Equality-Table

#### ```Composition```

#### ```Const```

#### ```Continuous deployment```

#### ```Continuous integration```

#### ```Currying```


## D:

#### ```Data Access Layer```

#### ```Destructuring```

#### ```Dependency```

#### ```Duck typing```
General term for "type checks" that make assumptions about a value's "type"
based on its shape (what properties are present).
"If it looks like a duck, and quacks like a duck, it must be a duck".

#### ```DRY```


## E:

#### ```Event loop```
The mechanism that performs moving functions from
the event queue to stack when stack becomes empty.

#### ```Event queue```
One of the part js execution enviroment, that contain queue of event,
that are ready to execution. These event were moved to queue from WebApis (for browsers),
and are waiting to be moved to ```stack``` by ```event loop```


## F:

#### ```Factory```

#### ```Function```


## G:

#### ```Generator```
It's a special kind of function that can start and stop one or more times,
and doesn't necessarily ever have to finish.

```js
function *foo(x) {
	var y = x * (yield);
	return y;
}

var it = foo( 6 );

// start `foo(..)`
it.next();

var res = it.next( 7 );

res.value;		// 42
```

#### ```graphQL```

#### ```GWT```


## H:

#### ```Higher-order Function```

#### ```Hoisting```
Moving all declarations to their respective scopes.
[More about Scope and Closure](Scope&Closure.md)


## I:

#### ```Immutable Data```

#### ```Infinity```
```js
var a = 1 / 0;	// Infinity
var b = -1 / 0;	// -Infinity

var a = Number.MAX_VALUE;	// 1.7976931348623157e+308
a + a;						        // Infinity
a + Math.pow( 2, 970 );		// Infinity
a + Math.pow( 2, 969 );		// 1.7976931348623157e+308
```

#### ```Introspection```

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

#### ```JSON```

#### ```JSON-safe```
Json-safe values consist of values that can be represented as JSON.
Not Json-safe: ```undefineds```, ```functions```, ```symbols```, and objects with circular references.


## M:

#### ```Mixins```


## L

#### ```Let```

#### ```Localstorage```


## M:

#### ```Memoization```

#### ```Mock```


## N:

#### ```Numbers```
JavaScript's numbers is based on the "IEEE 754" standard, often called "floating-point." JavaScript specifically uses the "double precision" format (aka "64-bit binary").

#### ```Number.MAX_VALUE```
The maximum integer that can "safely" be represented is ```2^53 - 1```, which is ```9007199254740991```


## O:

#### ```Object.assign```
Allows shadow cloning props from one object into another.

#### ```Object.setPrototypeOf```

```js
Object.setPrototypeOf( o2, o1 );
```

#### ```OLOO```
Objects-linked-to-other-objects is a code style which creates and relates objects directly without the abstraction of classes. OLOO quite naturally implements [[Prototype]]-based behavior delegation.
[More about objects](Object.md)


## P:

#### ```Parasitic inheritance```

#### ```Partial application```

#### ```Promise```
It's a special JavaScript object that resolves ```async code``` by execute
depending on event code after event triggering. Also it allows handle errors and combines ```async code```
by some conditions, like waiting on all event, etc.
[See example with Promise](JS Core/demo/Promise/1-promise-basic.js)

#### ```Promise.all```
Wait the moment when each promise will be ready.

#### ```Promise.race```
Wait the moment when first promise will be ready or will be rejected.

#### ```Pure function```


## R:

#### ```Reflection```

#### ```Regular Expressions```

#### ```REST```

#### ```RESTFull```


## S:

#### ```Scaffolding```

#### ```Service workers```

#### ```Singleton```

#### ```Symbol```

#### ```SOLID```

#### ```Spread operator```

#### ```Spike```

#### ```Stub```

#### ```Superposition```


## T:

#### ```TCO```
Tail Call Optimization

#### ```TDD```

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


## W:

#### ```WebWorkers```
