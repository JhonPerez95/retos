const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
// fizzbuzz()
// fizzbuzz()
// fizzbuzz()

const fizzbuzz2 = () => {
  for (let i = 1; i <= 100; i++) {
    let log = ''
    if (i % 3 === 0) {
      log += 'Fizz'
    }
    if (i % 5 === 0) {
      log += 'Buzz'
    }
    console.log(log || i)
  }
}

fizzbuzz2()
