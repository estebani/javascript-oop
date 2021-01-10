'use strict';

// Decorator Design - Patter
function validations(val) {
    // Clousure - IIFE
    (function firstPress(screen) {
        if(screen.length === 0 && (val !== 'btn0' && val !== 'btn1')){
            throw new Error('the first element cannot be an operand')
        }
    })(this.screen);
}
 

class Calculator{
    // Properties
    screen;
    buttons;
    firstElem;
    secondElem;
    
    constructor(){
        //@immutable()
        this.screen = document.getElementById('res').innerText;
        this.buttons = document.querySelectorAll('button');
        for(let button of this.buttons){
            button.addEventListener('click',(e)=>{
                const val = e.target.id;
                validations.call(this, val);
                this.switchButton(val)
            })
        }
    }
    
    switchButton(key){
        switch(key){
            case 'btn0':
                break;
            case 'btn1':
                break;
            case 'btnClr':
                break;
            case 'btnEql':
                break;
            case 'btnSum':
                break;
            case 'btnSub':
                break;
            case 'btnMul':
                break;
            case 'btnDiv':
                break;
        }
        
    }
    clearScreen(){
        screen.innerText = '';
    }
    sum(){}
    sub(){}
    mul(){}
    div(){}     
};

Calculator.prototype.showResult = function() {
    debugger
}
new Calculator();

