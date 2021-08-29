// 'use strict'

// 1. crear un objeto que imprima hola name

const objectName ={
    name: 'Jhon',
    imprimir: ()=>{console.log(`hola ${objectName.name}`)},
}

objectName.imprimir();


// 2. como dejar el objeto inmutable

Object.freeze(objectName);
objectName.name = 'jainer';
objectName.imprimir();


// 3. imprimer el nombre de las 3 ciudades que mas se repite en un array
var pais = [
    'Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica', 
    'Colombia', 'Argentina', 'Argentina' , 'Argentina', 'Costa Rica', 'Costa Rica'
];


function logMostCities(numCities = 3){
    const cities={}
    pais.forEach((item)=>{
        cities[item] = !cities[item] ? 1 :  cities[item] += 1;
    });
    return Object.keys(cities).map((item)=>(
        { 
            name: item ,
            times: cities[item]
        }
    )).sort((a, b)=>b.times - a.times)
    .slice(0, numCities )
    .map(item => item.name)
}

console.log(logMostCities())


/**
 Optimizar codigo
 return Object.keys(cities).map((item)=>{
       return {name: item , times: cities[item]}
    })
 */