//Lexical Scope(Static Scope
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside a code block

// Global Scope(varOne)

let varOne= 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

console.log(varTwo)