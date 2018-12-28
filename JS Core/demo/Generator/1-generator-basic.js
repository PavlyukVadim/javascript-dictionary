function *foo(x) {
	const y = x * (yield)
	return y
}

const it = foo(2)

// start `foo(..)`
it.next()

const res = it.next(3)

console.log(res.value)		// 6
