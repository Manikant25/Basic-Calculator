const defaultResult=0;
let currentResult=defaultResult // Variable delcaration

function getUserInput (){
return parseInt(userInput.value)
}

function createAndWriteLog(opertor ,resultBeforeca, calcNumber)
{
    const calcDescription = `${resultBeforeca} ${opertor} ${calcNumber}`; 
    outputResult(currentResult,calcDescription); 
}

function add(){     
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
const initailResult = currentResult
  currentResult = currentResult + enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
  createAndWriteLog('+',initailResult,enteredNumber)
}

function substract(){
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult - enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('-',initailResult,enteredNumber)
}

function multiply () {
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult * enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('*',initailResult,enteredNumber)
}

function divide (){
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult / enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('/',initailResult,enteredNumber)

}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",substract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);



