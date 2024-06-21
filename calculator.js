//Declaring variables
const numbersButtons=document.querySelectorAll('[number-opertion]');
const OperatorsButton=document.querySelectorAll('[operator-opertion]');
const reset=document.querySelector('[clearButton]');
const delet=document.querySelector('[DeletButton]');
const previousOutput=document.querySelector(".previous");
const currentsOutput=document.querySelector(".current");
const Equals=document.querySelector('[EqualsButton]');

//Class Calculator
class Calculator{
    constructor(previousOutput,currentsOutput){
        this.previousOutput=previousOutput;
        this.currentsOutput=currentsOutput;
        this.clear();
    }

    clear(){
      this.firstOperand='';
      this.secondOperand='';
      this.Operation=undefined;
    }
    Delt(){
        this.firstOperand=currentsOutput.innerText.slice(0,-1)

    }
    appendNumbers(number){
        if(number==='.' && this.firstOperand.includes('.'))return
        
        this.firstOperand=currentsOutput.innerText.toString()+ number.toString();
    }
    chooseOperation(opertion){
        if(this.firstOperand==='')return
        this.opertion=opertion;
        this.secondOperand=this.firstOperand+" "+opertion;
        this.firstOperand='';
        
    }
    compute(){
        let calculation;
        const num1=parseFloat(this.firstOperand);
        const num2=parseFloat(this.secondOperand);
        if(isNaN(num1) || isNaN(num2))return
        switch(this.opertion){
            case '*':
                calculation= num2 * num1;
                break
            case '/':
                calculation= num2 / num1;
                break
            case '+':
                calculation= num2 + num1;
                break
            case "-":
                calculation= num2 - num1;
                break
            default:
                return;
        }
        
        this.firstOperand=calculation;
        this.opertion=undefined;
        this.secondOperand='';
    }

    updateCalculator(){
        this.currentsOutput.innerText=this.firstOperand;
        this.previousOutput.innerText=this.secondOperand;
     
    }
}
//Class Calculator Object

const calculator=new Calculator(previousOutput,currentsOutput);

for(let i=0;i<numbersButtons.length;i++){
    numbersButtons[i].addEventListener("click",function(){
        calculator.appendNumbers(numbersButtons[i].innerText);
        calculator.updateCalculator();
    })

}

for(let i=0;i<OperatorsButton.length;i++){
    OperatorsButton[i].addEventListener("click",function(){
        calculator.chooseOperation(OperatorsButton[i].innerText);
        calculator.updateCalculator();
        
    })

}



reset.addEventListener('click',function(){
    calculator.clear();
    calculator.updateCalculator();
})

delet.addEventListener('click',function(){
    calculator.Delt();
    calculator.updateCalculator();
})

Equals.addEventListener('click',function(){
    calculator.compute();
    calculator.updateCalculator();
})