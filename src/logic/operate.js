
const operate = (one, two, operator)=>{

    let num1 = one ? parseFloat(one) : 0;
    let num2 = two ? parseFloat(two) : operator === 'x' || operator === '÷' ? 1: 0;
    
    let result;
    console.log(`num1: ${num1},  num2: ${num2}, operator: ${operator}`);

    if(operator === '+'){ 
        result = num1 + num2;
    }

    if(operator === '-'){
        result = num1 - num2;
    }

    if(operator === 'x'){
        result = num1 * num2;
    }

    if(operator === '÷'){
        result = num1 / num2;
    }

    console.log(`result: ${result}`);
    return result;
}

export default operate;