// reverse a un numero

const reverseNum = (num)=>{
    const reverse = num.toString().split('').reverse().join('')
    return parseInt(reverse) * Math.sign(num)
}

const res = reverseNum( -56)
console.log(res)
