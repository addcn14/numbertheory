$("#gcd").click(function(){
  console.log("has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
testForZero = false
while(testForZero === false){

  firstNum = Number(prompt("Please enter the value of the first number.")
  secondNum = Number(prompt("Please enter the value of the second number.")

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
    alert ("This is the gcd " + rBkup)
  }
  
/*case where a=0 or b=0
*-----------------------
*/
  
  else {
    alert("That was an invalid input. Please try again.")
    }
}
})
