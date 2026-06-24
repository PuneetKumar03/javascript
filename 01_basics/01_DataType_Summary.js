
//primitive datatype

//number , string , boolean , undefined , null , bigInt , Symbol

let num = 123

let id = Symbol(num);

console.log(typeof(id));

let BigNumber = 123456789876543412423n

console.log(BigNumber)


//Non primitive Datatype

//object , function , Array

let heroes = ["Spiderman" , "loki" , "IronMan"]

console.log(typeof(heroes));

let typeFunction = function(){
    console.log("Inside Function")
}

console.log(typeof typeFunction)

let Null = null

console.log(typeof(Null))