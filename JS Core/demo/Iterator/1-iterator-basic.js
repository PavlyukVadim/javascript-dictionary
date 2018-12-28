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
