const defaultResult=0;
let currentResult=defaultResult // Variable delcaration

function add(num1,num2){
  result = num1 + num2;
//  alert(`The result is ${result}`)
return 
alert("It will not run as it is after return ")
}

additonResult = add(100,200)
alert(`Result is ${additonResult}`)
// add(10,10)
// add(10,20)

currentResult = currentResult + 10

//let calculationDescription='(' + currentResult + '+10) * 23'; //Js will take it as string
//Better way for string concatenation 
let calculationDescription =`(${defaultResult} +10) * 10 -12` //Backtiks and dollar sign use in string
 


outputResult(currentResult,calculationDescription);

