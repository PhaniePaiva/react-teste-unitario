export function isEqual(value, other) {
  if (value === other) {
    return true
  }
  return false
}

//const result = isEqual(5,6)
//const expected = false

// expect(result).toEqual(expect)

// if(result !== expected){
//   throw new Error(`${result} is not equal ${expected}`)
// }

// function expect(result){
//   return{
//     toEqual(expected){
//       if(result !== expected){
//         throw new Error(`${result} is not equal ${expected}`)
//       }
//     }
//   }

// }