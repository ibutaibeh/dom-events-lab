/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1;
let num2;
let calculatorOperator;
let result;
/*------------------------ Cached Element References ------------------------*/
const buttonNumber = document.getElementsByClassName('button number');
const buttonOperator = document.getElementsByClassName('button operator');
const calDisplay= document.querySelector('.display')
const buttonResult=document.getElementsByClassName('button equals');
/*----------------------------- Event Listeners -----------------------------*/
//listen for number button
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

 //listen for opreator button
for(let j=0; j<buttonOperator.length;j++){
    buttonOperator[j].addEventListener('click',(event)=>{

        if(event.target.innerText==='C'){
            calDisplay.textContent='';
            num1='';
            num2='';
            calculatorOperator='';
            result=0
        
        }else{
            calDisplay.textContent='';
            calculatorOperator=event.target.innerText;
        }
        })
}

//listen for result button
if(calculatorOperator!==''){
    for(let k=0; k<buttonResult.length;k++){
        buttonResult[k].addEventListener('click',(event)=>{
            console.log(event.target.innerText);
            calDisplay.textContent= resultFucntion(num1,num2,calculatorOperator);
        })
        }
}else{
    calDisplay.textContent=''
}



/*-------------------------------- Functions --------------------------------*/

const resultFucntion=(x,y,z)=>{
result=eval(`${x}${z}${y}`);
    num1=result;
return result;
    }
