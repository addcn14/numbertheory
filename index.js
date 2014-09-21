var main = function(){
$("#gcd").click(function(){
  //for original debugging: console.log("has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
testForZero = false
while(testForZero === false){

  var firstNum = prompt("Please enter the value of the first number.")
  var secondNum = prompt("Please enter the value of the second number.")

/*for "prevent this page from additional dialogs"
*-------------------------------------------------
*/
  console.log(firstNum)
  if(firstNum === null || secondNum === null || firstNum === "" || secondNum === ""){
    console.log("worked")
  testForZero = true
  }
/*set larger number to largerNum, smaller to smallerNum
*------------------------------------------------------
*/
firstNum = Number(firstNum)
secondNum = Number(secondNum)
//^^ seems redundant but its to make sure no dialog box x's
  if (firstNum !== 0 && secondNum!== 0) {
     testForZero = true
    if (firstNum >= secondNum) {
      a = firstNum
      b = secondNum
    } else {
      a = secondNum
      b = firstNum
    }
    
/*start gcd computations:
*-------------------------
*/

    while(b !== 0) {
      rBkup = b
      b = a % b
      a = rBkup
    }
    alert ("The gcd is " + rBkup)
  }
  
/*case where a=0 or b=0
*-----------------------
*/
  
  else {
    alert("That was an invalid input. Please try again.")
    }
}
})

$("#LCM").click(function(){
  //console.log("has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
testForZero = false
while(testForZero === false){

  var firstNum = prompt("Please enter the value of the first number.")
  var secondNum = prompt("Please enter the value of the second number.")

/*for "prevent this page from additional dialogs"
*-------------------------------------------------
*/
  console.log(firstNum)
  if(firstNum === null || secondNum === null || firstNum === "" || secondNum === ""){
    console.log("worked")
  testForZero = true
  }
/*set larger number to largerNum, smaller to smallerNum
*------------------------------------------------------
*/

  if (firstNum !== 0 && secondNum!== 0) {
     testForZero = true
    if (firstNum >= secondNum) {
      a = firstNum
      b = secondNum
    } else {
      a = secondNum
      b = firstNum
    }
    
/*start gcd computations:
*-------------------------
*/

    while(b !== 0) {
      rBkup = b
      b = a % b
      a = rBkup
    }
    ans = firstNum*secondNum/rBkup
    alert ("The LCM is " + ans)
  }
  
/*case where a=0 or b=0
*-----------------------
*/
  
  else {
    alert("That was an invalid input. Please try again.")
    }
}
})
}
$(document).ready(main)

/*
*Here's the 3n+1 algorithm
*NOTE:
*if n is odd, then new n = n*3+1
*if n is even, then new n = n/2
*/
alert("Welcome to the 3n+1 program.");
$("#empty").append("<br>Here are the results")
/*var n = Number(prompt("What is the number of the original n?"));
while(n !== 1 || n!==4 || n!==2){
  
}*/
