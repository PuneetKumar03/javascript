// console.log(Math.random()*10 +1)

let max = 20
let min = 11
console.log(Math.floor(Math.random()*(max - min + 1)) + min)

let maxi = Number.MAX_VALUE

console.log(maxi)

let num = new Number(23)
let num2 = num;
console.log(typeof(num2)) // 42
num2 = 42
console.log(num) // 23

console.log(Date.now())

let dateTime = new Date("2026-06-25")
console.log(dateTime.toDateString())

let createdAt = new Date("2026-06-23")
let Timenow = Date.now()
let diff = Timenow - createdAt.getTime()
console.log(diff/(1000*60*60*24)) // 3 days


console.log(dateTime.toLocaleString("en-US", 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))


