## this

When a function is invoked an execution context is created.
It contains information about:
1. Where the function was called from (the call-stack)
1. How the function was invoked
1. What parameters were passed, ...

One of the properties of this record is the ```this``` reference,
which will be used for the duration of that function's execution.

## 4 rules of call-site:

### 1. Default Binding:
```this``` inside of function:

1.1 ```strict mode```: ```this``` is set to ```undefined```

1.2 otherwise ```this``` is refers to ```window```
  
### 2.Implicit Binding:

```this``` inside of function refers to contained object:
```js
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2
```

Related to ```Implicitly Lost```, when inner function is assigned to another var as ref and lost context,
like with ```setTimeout``` problem.

### Explicit Binding:

1. ```call(..)```
1. ```apply(..)```
1. ```bind(..)```

bind(..) returns a new function that is hard-coded to call the original function
with the this context set as you specified:

```js
function bind(fn, obj) {
	return function() {
		return fn.apply( obj, arguments );
	};
}
```

### ```new``` Binding:

```js
function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
```

! Arrow functions adopts the ```this``` binding from the enclosing (function or global) scope.
