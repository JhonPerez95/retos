const arr = [1 ,2 ,2 ,3 ];
let prueba;
// console.log(arr);
let prueba2  = arr.map((item, index, arr)=> item = index == 2 ? ` ${item}` : item).join('');

// console.log(prueba2) 



const numberDirec = (num)=>{
    return num.split('').map((item, index)=> item = index == 2 ? ` ${item}` : item).join('');
}

const response = numberDirec('1422');
console.log(response)


const objeto = {
    a: 'jhon',
    b: 'Mafe',
    c: 'Angie'
}

const arrObjt = Object.values(objeto)

// console.log(arrObjt)


// ejercicio que convierte la primera palabra de cada frase en MAYUSCULA
const capitalie = (str)=>{
    return  word = str.split(' ').map( item => `${item[0].toUpperCase()}${item.slice(1)}`).join(" ")
}
const res = capitalie('esto es un ejemplo')
console.log(res)