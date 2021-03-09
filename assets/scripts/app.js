const defaultResult=0;
let currentResult=defaultResult // Variable delcaration
let logEntries =[]
function getUserInput (){
return parseInt(userInput.value)
}

function createAndWriteLog(opertor ,resultBeforeca, calcNumber)
{
    const calcDescription = `${resultBeforeca} ${opertor} ${calcNumber}`; 
    outputResult(currentResult,calcDescription); 
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry ={      //Object
        operation :operationIdentifier,
        preResult: prevResult,
        number : operationNumber ,
        result : newResult
     }
     console.log(logEntries);
     console.log(logEntry);
     console.log(logEntry.operation) //Accessing object property

}

function add(){     
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
const initailResult = currentResult
  currentResult += enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
  createAndWriteLog('+',initailResult,enteredNumber)
  logEntries.push(enteredNumber)
 writeToLog('ADD',initailResult,enteredNumber,currentResult)
}

function substract(){  
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult - enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('-',initailResult,enteredNumber)
    logEntries.push(enteredNumber)
    writeToLog('SUB',initailResult,enteredNumber,currentResult)
   
}


function multiply () {
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult * enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('*',initailResult,enteredNumber)
    logEntries.push(enteredNumber)
    writeToLog('MUL',initailResult,enteredNumber,currentResult)
}

function divide (){
    const enteredNumber = getUserInput()
    //It is a string , whatever input we take it will be in string
    const initailResult = currentResult
    currentResult = currentResult / enteredNumber ; // currentResult = currentResult + +usernput.value;  This is the another way to convert
    createAndWriteLog('/',initailResult,enteredNumber)
    logEntries.push(enteredNumber)
    writeToLog('Divide',initailResult,enteredNumber,currentResult)

}

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",substract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);



