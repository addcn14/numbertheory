$("#gcd").click(function(){
  //for original debugging: console.log("has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
testForZero = false
while(testForZero === false){

  var firstNum = Number(prompt("Please enter the value of the first number."))
  var secondNum = Number(prompt("Please enter the value of the second number."))

/*for "prevent this page from additional dialogs"
*-------------------------------------------------
*/
  testForZero = true
  console.log(firstNum)
  if(firstNum === undefined){
  console.log("worked")
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
  console.log("has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
testForZero = false
while(testForZero === false){

  var firstNum = Number(prompt("Please enter the value of the first number."))
  var secondNum = Number(prompt("Please enter the value of the second number."))

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
