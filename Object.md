## Object

There are two types of creating object in javascript:
1. declarative (```const a = {}```)
1. constructed (```const a = new Object()```)

### Built-in Objects:

There are sub-types of object in javascript:

```String```, ```Number```, ```Boolean```, ```Function```,
```Array```, ```Date```, ```RegExp```, ```Error```


### Property Descriptors:

#### Writable:

```js
var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false, // not writable!
	configurable: true,
	enumerable: true
} );

myObject.a = 3;

myObject.a; // 2 or TypeError in strict mode
```

#### Configurable:

```js
Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
} );

myObject.a;				// 2
delete myObject.a;
myObject.a;				// 2
```

#### Enumerable:

Set enumerations ability, such as the for..in

#### Immutability:

By combining ```writable:false``` and ```configurable:false```,
you can create a constant (cannot be changed, redefined or deleted) object property

#### Prevent Extensions:

```js
var myObject = {
	a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
myObject.b; // undefined
```

##### Seal:

Object.seal(..) creates a "sealed" object, which means it takes an existing object
and calls Object.preventExtensions(..) on it,
but also marks all its existing properties as configurable:false.

- [ ] Add more properties
- [ ] Reconfigure properties
- [ ] Delete properties
- [x] Modify properties values

##### Freeze:

Object.freeze(..) creates a frozen object, which means it takes an existing object
and calls Object.seal(..) on it,
but it also marks all "data accessor" properties as writable:false.

- [ ] Add more properties
- [ ] Reconfigure properties
- [ ] Delete properties
- [ ] Modify properties values
