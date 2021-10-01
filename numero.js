let  num = '1.000.000'
num = num.split('.').join('')
console.log(num)
//console.log(newNum)

let arr1 = [1,4,5,90]
let arr2 = [5,8,7,4,1]

function mergeArr (arr1, arr2) {
    return arrCombined = arr1.concat(arr2).sort((a,b )=>a-b)
}
const resp = mergeArr(arr1, arr2)
console.log(resp);
