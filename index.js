$(document).ready(){
  $(#gcd).click(){
/*get numbers: firstNum, secondNum
*---------------------------------
*/

while(testForZero = false){

  var firstNum = Number(prompt("Please enter the value of the first number.")
  var secondNum = Number(prompt("Please enter the value of the second number.")

/*set larger number to largerNum, smaller to smallerNum
*------------------------------------------------------
*/

  if (largerNum !== 0 && smallerNum!== 0) {
    testForZero = true
    if (firstNum >= secondNum) {
      largerNum = firstNum
      smallerNum = secondNum
    } else {
      largerNum = secondNum
      smallerNum = firstNum
    }
    
/*start gcd computations:
*-------------------------
*/
  
    while(b !== 0) {
      rBkup = b
      b = a % b
      a = rBkup
    }
    alert ("This is the gcd " + rBkup)
  }
  
/*case where a=0 or b=0
*-----------------------
*/
  
  else {
    alert("That was an invalid input. Please try again.")
    }
}
}
}
