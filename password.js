let password = 'bhm3113'
// checks varibles to make sure requirements are met 

let minChars = false


for(let i = 0; i < password.length; i++){
    console.log(password[i])
}
//check that password meets minimum characters 
if(password >= 10){
minChars = true
}

console.log(minChars)