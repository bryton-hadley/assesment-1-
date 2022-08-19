//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
/* first i am going to create a variable called "myName" by using const: 
i am going to assian the varible a string vaule of "Bryton" */ 

const myName = " Bryton"

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
/* first i am going to create a variable called "faveNum" by using let 
i am going to assian the varible a  number vaule of "13" */ 

let faveNum = 13

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
/* first i am going to create a variable called "lovesCode" by using let 
i am going to assian the varible a  boolean vaule of true */

let lovesCode = true 

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
/* i am going to use an if() to set faveNum  === (equal) to "13" and console.log('lucky 13')
 then i will use an else if() to say if its's !== (not equal) to 13 then console.log('not lucky 13')
*/

if( faveNum === 13){
  console.log('Lucky 13!')
} else if(faveNum !== 13){
  console.log('not lucky 13')
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
/* i am going to set this up with an for() then I will set i to eqaul my faveNums then i would set i less then 5 because we want it to run 5 times
then i woul use i++ to making it add i 5 times. to mak this all work i will console.log i
for(let i = faveNum; i < 5; i++){
    console.log(i)
   }