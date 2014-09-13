$(#gcd).click(){function(){
  console.log("Has been clicked.")
/*get numbers: firstNum, secondNum
*---------------------------------
*/
var testForZero = false
while(testForZero === false){

  var firstNum = Number(prompt("Please enter the value of the first number.")
  var secondNum = Number(prompt("Please enter the value of the second number.")

/*set larger number to largerNum, smaller to smallerNum
*------------------------------------------------------
*/

  if (firstNum !== 0 && secondNum!== 0) {
    var testForZero = true
    if (firstNum >= secondNum) {
      var a = firstNum
      var b = secondNum
    } else {
      var a = secondNum
      var b = firstNum
    }
    
/*start gcd computations:
*-------------------------
*/

    while(b !== 0) {
      var rBkup = b
      var b = a % b
      var a = rBkup
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
}}
