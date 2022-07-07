// 1

// function ordenar(elements) {
//   const frequency = {}

//    elements.forEach(element => {
//     frequency[element] =  frequency[element] +1 || 1
//   })

//   return [...elements].sort((a, b) => frequency[a] - frequency[b] || a-b)
// }

// const result = ordenar([3, 1, 2, 2, 4])
// console.log(result)
// // [3,6,4,4,5,5]

// const axios = require('axios')

// const main = async (nameCiudad, costo) => {
//   const url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${nameCiudad}&estimated_cost=${costo}`

//   const { data: result } = await axios.get(url)
//   const { data } = result

//   let totalVote = 0

//   if (data) {
//     totalVote = -1
//   } else {
//     data.forEach((element) => {
//       totalVote += element?.user_rating?.votes || -1
//     })
//   }
//   console.log(totalVote)
// }

// // main('Seattle', 110)
// main('Delaware', 150)
const dificulty= {
  1:{1:[2,5,4], 2:[3,6,7,8,9]
  }
}

function entryTime(s, keypad) {
   let count=0
    const digito = s.split('')
    const position ={}
    keypad.split('').forEach((item, index) => {
        position[item] 
    })
console.log(position)
}

entryTime("2324","923857614")
// const arrayL = [9,2,3,8,5,7,6,1,4]