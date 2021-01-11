'use strict';

// Decorator DesignPatter - Clousure
function utils() {
    return {
        validateFirstPress: function(val){
            if(this.screen.innerText.length === 0 && (val !== '0' && val !== '1')){
                throw new Error('the first element cannot be an operand')
            }
        }
    }
}

// Inheritance
class  Operations {
    sum = function(x,y){
        return x + y;
    }
    sub= function(x,y){
        return x - y;

    }
    mul= function(x,y){
        return x * y;

    }
    div= function(x,y){
        return x / y;
    }
}
 

class Calculator extends Operations{
    // Properties
    screen;
    buttons;
    firstElem='';
    secondElem='';
    currentElem = 0;
    operation;
    
    constructor(){
        super();
        const util = utils();
        this.screen = document.getElementById('res');
        this.buttons = document.querySelectorAll('button');
        for(let button of this.buttons){
            button.addEventListener('click',(e)=>{
                const val = e.target.innerText;
                util.validateFirstPress.call(this,val)
                this.switchButton(val)
            })
        }
    }
    
    switchButton(key){
        switch(key){
            case '0':
            case '1':
                this.setElements(key);
                break;
            case 'C':
                this.clearScreen();
                break;
            case '=':
                this.showResult();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setOperation(key);
                break;
        }
        
    }
    
    clearScreen(){
        this.screen.innerText = '';
        this.firstElem = ''; 
        this.secondElem = '';
        this.currentElem = 0;
    };
    setElements(digit){
        if(this.currentElem==0) this.firstElem+=digit;
        else this.secondElem+=digit;
        this.addToScreen(digit);
    }
    setOperation(operation){
        this.operation = operation;
        this.currentElem = 1;
        this.addToScreen(operation);
    }
    addToScreen(x){
        this.screen.innerText = this.screen.innerText+x;
    }
    
};


// Prototype inheritance
Calculator.prototype.showResult = function() {
    let firstNum = parseInt(this.firstElem, 2)
    let secondNum = parseInt(this.secondElem, 2)
    let result;
    switch(this.operation){
        case '+':
            result = this.sum(firstNum, secondNum);
            break;
        case '-':
            result = this.sub(firstNum, secondNum);
            break;
        case '*':
            result = this.mul(firstNum, secondNum);
            break;
        case '/':
            result = this.div(firstNum, secondNum);
            break;
    }
    this.clearScreen()
    this.addToScreen(result.toString(2))

}


new Calculator();

