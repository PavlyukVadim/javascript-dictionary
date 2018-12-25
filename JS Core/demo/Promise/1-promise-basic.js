const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
)
