let name

name = 'Jen'


if(name === undefined){
  console.log('Please provider a name')
} else{
    console.log(name)
}

//Undefined for function arguments
//Undefined as function return default value
let square = function(num){
  console.log(num)
}

let result = square()

console.log(result)

//Null as assined value
let age = 27

age = undefined

console.log(age)