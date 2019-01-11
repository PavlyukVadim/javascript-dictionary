# javascript-dictionary

## Table of content:
1. [JS Core](JS%20Core)
1. [OOP](OOP)
1. [Design Patterns](Design%20Patterns)
1. [Architecture principles](Architecture%20principles)
1. [Functional programming](Functional%20programming)
1. [Client-Server Communication](Client-Server%20Communication)
1. [Testing in JS](Testing%20in%20JS)


# Dictionary:
## A:

#### ```AST```
Abstract syntax tree.

#### ```Abstract Equality```
Comparison operator (x == y, where x and y are values, produces true or false).

[Read more about Abstract Equality](JS%20Core/Operators.md#abstract-equality)

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

[More about Scope and Closure](JS%20Core/Scope&Closure.md)

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

#### ```Event Emmiter```
Universal abstraction for working with events via subscription (addListener, on, once) and emit

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

[Examples with Generator](JS%20Core/demo/Generator/1-generator-basic.js)


#### ```graphQL```

#### ```GWT```


## H:

#### ```Higher-order Function```

#### ```Hoisting```
Moving all declarations to their respective scopes.

[More about Scope and Closure](JS%20Core/Scope&Closure.md)


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

[Examples with Iterator](JS%20Core/demo/Iterator/1-iterator-basic.js)


## J:

#### ```JSON```

#### ```JSON-safe```
Json-safe values consist of values that can be represented as JSON.
Not Json-safe: ```undefineds```, ```functions```, ```symbols```, and objects with circular references.


## L:

#### ```Let```

#### ```Localstorage```


## M:

#### ```Map```

#### ```Meta Programming```

#### ```Mixins```

#### ```Memoization```

#### ```Mock```
Mocks or Fakes are faking certain modules or behaviors
to test different parts of a processes.


## N:

#### ```Number```:
JavaScript's numbers is based on the "IEEE 754" standard, often called "floating-point." JavaScript specifically uses the "double precision" format (aka "64-bit binary").

##### ```Number.MAX_VALUE```
The maximum integer that can "safely" be represented is ```2^53 - 1```, which is ```9007199254740991```


## O:

#### ```Object```:

##### ```Object.assign```
Allows shadow cloning props from one object into another.

##### ```Object.setPrototypeOf```

Allows set object as [```prototype```](#prototype) of another object.

#### ```OLOO```
Objects-linked-to-other-objects is a code style which creates and relates objects directly without the abstraction of classes. OLOO quite naturally implements [[Prototype]]-based behavior delegation.

[More about objects](JS%20Core/Object.md)


## P:

#### ```Parasitic inheritance```

#### ```Partial application```

#### ```Promise```:
It's a special JavaScript object that resolves ```async code``` by execute
depending on event code after event triggering. Also it allows handle errors and combines ```async code```
by some conditions, like waiting on all event, etc.

[Examples with Promise](JS%20Core/demo/Promise/1-promise-basic.js)

##### ```Promise.all```
Wait the moment when each promise will be ready.

[Examples with Promise.all](JS%20Core/demo/Promise/2-promise-all.js)

##### ```Promise.race```
Wait the moment when first promise will be ready or will be rejected.

[Examples with Promise.race](JS%20Core/demo/Promise/3-promise-race.js)

#### ```Prototype```

#### ```Proxy```

#### ```Pure function```


## R:

#### ```Reflect```

#### ```Reflection```

#### ```Regular Expressions```

#### ```REST```
Representational State Transfer is a style of software architecture.
As described in a dissertation by Roy Fielding, REST is an "architectural style" that basically exploits the existing technology and protocols of the Web

#### ```RESTful```
To refer to web services implementing such an architecture.


## S:

#### ```Scaffolding```

#### ```Service workers```

#### ```Set```

#### ```Singleton```

#### ```Symbol```

#### ```SOLID```
* The Single Responsibility Principle
* The Open Closed Principle
* The Liskov Substitution Principle
* The Interface Segregation Principle
* The Dependency Inversion Principle

#### ```Spread operator```

#### ```Spies```
Spies provide us with information about functions:
* How many times were they called?
* In what cases?
* By whom?

#### ```Stub```
Stubbing replaces selected functions with selected functions
to ensure an expected behavior on selected modules.

#### ```Superposition```


## T:

#### ```TCO```
Tail Call Optimization.

#### ```TDD```

#### ```Typeof```
Operator inspects the type of the given value.

[More about typeof](JS%20Core/Operators.md#typeof)

#### ```Types```:
JavaScript defines seven built-in types:
* ```number```
* ```string```
* ```boolean```
* ```null```
* ```undefined```
* ```object```
* ```symbol```

#### ```TypedArrays```:

```ArrayBuffer```, ```DataView```, ```Int8Array```, ```Uint8Array```, ```Uint8ClampedArray```, ```Int16Array```, ```Uint16Array```, ```Int32Array```, ```Uint32Array```, ```Float32Array```, ```Float64Array```.


## U:

#### ```URI```
*Uniform Resource Identifier*. URIs are a standard for identifying documents using a short string of numbers, letters, and symbols. ```URLs```, ```URNs```, and ```URCs``` are all types of URI.

#### ```URL```
*Uniform Resource Locator*. URL is a reference to a web resource that specifies its location and a mechanism for retrieving it.

Example: ```https://mysite.com/route?foo=bar#anchor```.

URLs always start with a protocol(```https```) and usually contain information such as the network hostname (```mysite.com```) and often a document path (```route```). URLs may have query parameters(```foo```) and fragment identifiers(```anchor```).

## W:

#### ```WeakMap```

#### ```WeakSet```

#### ```WebWorkers```
