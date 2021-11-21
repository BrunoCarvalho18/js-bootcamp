let temp = 65   

//Logical and Operator - True if both sides are true. False otherwise

if(temp >= 65 && temp <= 90){
   console.log('It is pretty nice out')
}

else if(temp <=0 || temp >=120){
   console.log('Do not go outside')
}

else{
   console.log('Do. What do you want')
}

//Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

//Are both vegan ? Only ofter up vegan dishes.
//At least one vegan? Make sure to offer up some vegan options.
//Else, Offer up anything on the menue

if(isGuestOneVegan && isGuestTwoVegan){
   console.log('Only offer up vegan dishes. ')
}else if(isGuestOneVegan || isGuestTwoVegan){
   console.log('Do not go outside')
}
else{
   console.log('Offer up anything on the menu')
}
