// Hallar si una palabra es una polindroma

const wordPolindroma = (str)=>{
    const regex = /[\W_]/g
    const cleaned = str.toLowerCase().replace(regex, '')
    const len = str.length

    for (let i = 0; i < len; i++) {
        console.log(cleaned)
        if (cleaned[i] !== cleaned[len -1 -i]) {
            return false
        }
    }
    return true

}

const res = wordPolindroma('radar')
console.log(res ? 'Polindroma' : 'No polindroma')


// Solucion 2

const palindrome = (str) => {
    const regex = /[\W_]/g
    const loverStr = str.toLowerCase().replace(regex, '')
    // const loverStr = str.toLowerCase().split(' ').join('').trim()
    const reverseStr = loverStr.split('').reverse().join('')
    return loverStr === reverseStr 
}
const res2 = palindrome('race car ') 
console.log(res2)