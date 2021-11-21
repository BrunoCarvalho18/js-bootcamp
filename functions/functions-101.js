//Function - input(argument), code, output

let greatUser = function () {
    console.log('Welcome user!')
}

greatUser()
greatUser()
greatUser()

let square = function (number) {
    let result = number * number
    return result

}

let value = 3
let otherValue = 10

console.log(value)
console.log(otherValue)

//Challenge Area



let convertFahreinheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

//Call a couple of times(32->0) (68->0)

let tempOne = convertFahreinheitToCelsius(32)
let tempTwo = convertFahreinheitToCelsius(64)

console.log(tempOne)
console.log(tempTwo)

//Print the convert values