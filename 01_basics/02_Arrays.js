// const arr = [0,1,2,3,4,5,6]

// arr.push(7)
// arr.pop()

// // console.log(arr)


// const arr1 = arr.slice(2,5)

// console.log(arr1)

// console.log(arr)

// const arr2 = arr.splice(2,3)

// console.log(arr2)

// arr.shift()

// console.log(arr)    

// console.log(arr.includes(1))

// console.log(arr.indexOf(2))

// const arr3 = arr.join()

// console.log(arr3)

// console.log(typeof(arr3))

// let arr = [1,2,3,4,5,6]

// let arr1 = [7,8,9]

// arr.push(...arr1)

// console.log(arr)

// let obj = {
//     0 : "Puneet",
//     1 : "Kumar",
//     2 : "Singh",
//     length : 3
//  }

//  console.log(Array.from(obj))

//  let map = new Map([
//     ["key1","value1"],
//     ["key2","value2"],
//     ["key3","value3"]
//  ])

//  console.log(Array.from(map))

// let arr = [1,2,3]

// console.log(Array.from(arr).map((value) => value*2))

// console.log(arr)

// let arr1 = Array.from(arr,x=>x*2)

// arr1.push(8)

// console.log(arr1)

let obj = {
    name : "Puneet",
    age : 23,
    city : "Delhi"
}
let arr = [...Object.values(obj)]
console.log(arr)

