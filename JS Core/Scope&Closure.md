## Compiler Theory

### Step of compiling:

1. Tokenizing/Lexing: breaking up a string of characters into tokens.
1. Parsing: taking a stream (array) of tokens and turning it into a tree of nested elements (Abstract Syntax Tree).
1. Code-Generation: the process of taking an AST and turning it into executable code.

## Scope:

1. Engine: responsible for start-to-finish compilation and execution of our JavaScript program.
1. Compiler: handles all the work of parsing and code-generation.
1. Scope: collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

How to cheat Lexical scope?
There are two ways: eval(..) and with, but it's a very bad idea, because of it defeats the Engine's ability to perform compile-time optimizations 

### Units of scope:

1. Functions
1. let/const from ES6 with blocks ({})
1. try/catch structure

### Hoisting:
- All declarations are moved to their respective scopes

! Function declarations are hoisted before normal variables

### Closure:
Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

#### Closure with loops (setTimeout task):

Wrong code:
```js
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}

```

Right code:
```js
for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})( i );
}
```
Or
```js
for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```
