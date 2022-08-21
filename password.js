// password check to see if the password is true or false 

let password = 'Pirate1331'

// Declares varibles to make sure requirements are met 

let minChar = false
let upperCase = false
let numCheck = false
let letterCheck = false

// I will use a for loop to check the requirments are met for numcheck by using for() and chekc for upper case letters 

for(let i = 0; i < password.length; i++){
    console.log(password[i].toUpperCase())
    if(password[i] !== NaN){
        numCheck = true
    }
    if(password[i] === password[i].toUpperCase()){
        upperCase = true
    }
}

// check that the password has a letter 
if(/a-zA-z.test(password)/){
    letterCheck = true
}

//check that password meets minimum characters 
if(password.length >= 10){
minChar = true
} 

console.log(minChar)
console.log(numCheck)
console.log(upperCase)
console.log(letterCheck)
