
const operate = (one, two, operator)=>{

    let num1 = parseFloat(one)
    let num2 = parseFloat(two)
    
    let result;
    console.log(num1, num2, operator);

    if(operator === '+'){ 
        result = num1 + num2;
    }

    if(operator === '-'){
        result = num1 - num2;
    }

    if(operator === 'x'){
        result = num1 * num2;
    }

    if(operator === '/'){
        result = num1 / num2;
    }

    console.log(`result: ${result}`);
    return result;
}

export default operate;