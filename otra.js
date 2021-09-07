const arr = [1 ,2 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
let prueba;
console.log(arr);
arr.map((item, index, arr)=>{
    console.log('****************')
    console.log(`item: ${item}`)
    console.log(`index: ${index}`)
    console.log(`arr: ${arr}`)
    prueba = item > 8 ? [ 'otra', ...arr] : null;
});

console.log(prueba)