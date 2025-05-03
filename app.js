/*-------------------------------- Constants --------------------------------*/
//const calculator = document.querySelector('#calculator');
const buttonNumber = document.getElementsByClassName('button number');
const buttonOperator = document.getElementsByClassName('button operator');
const calDisplay= document.querySelector('.display')
const buttonResult=document.getElementsByClassName('button equals');
/*-------------------------------- Variables --------------------------------*/
let num1;
let num2;
let calculatorOperator;
let result;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

//helper code test; since buttonNumber has more than one item (button) i should use for loop function to listen for events.
for (let i = 0; i < buttonNumber.length; i++) {
  buttonNumber[i].addEventListener('click', (event) => {

    if(calculatorOperator){
        console.log(event.target.innerText);
        num2=calDisplay.textContent+=event.target.innerText;
    }else{
        console.log(event.target.innerText);
        num1=calDisplay.textContent+=event.target.innerText;
    }

  });
 }
for(let j=0; j<buttonOperator.length;j++){
    buttonOperator[j].addEventListener('click',(event)=>{

        if(event.target.innerText==='C'){
            calDisplay.textContent='';
        }else{
            calDisplay.textContent='';
            calculatorOperator=event.target.innerText;
        }
        })
}

for(let k=0; k<buttonResult.length;k++){
buttonResult[k].addEventListener('click',(event)=>{
    console.log(event.target.innerText);
    calDisplay.textContent= resultFucntion(num1,num2,calculatorOperator);
    //calDisplay.textContent=event.target.innerText;
})
}


/*-------------------------------- Functions --------------------------------*/
//Calculator Fuctions
// //Addition
// const additionFucntion=(num1,num2)=>{
// return num1+num2;
// }
// //Substraction
// const substractionFucntion=(num1,num2)=>{
//     return num1-num2;
//     }
// //Multiplication
// const multiplicationFucntion=(num1,num2)=>{
//     return num1*num2;
//     }
// //Division
// const divisionFucntion=(num1,num2)=>{
//     return num1/num2;
//     }
// //Clear Calculator
// const clearFucntion=()=>{
//     console.log('should clear the calculator');
    
//     }
//Result Calculator
const resultFucntion=(x,y,z)=>{
    if(z==='+'){
result=x+y;
return result;
    }else if(z==='*'){
result=x*y;
return result;
    }else if(z==='-'){
result=x-y;
return result;
    }else{
result=x/y;
return result;
    }
    console.log(result);

    }
