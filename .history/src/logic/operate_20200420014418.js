
const operate = (one, two, operator)=>{

    let num1 = parseFloat(one)
    let num2 = parseFloat(two)

    if(operator === '+'){
        return num1 + num2;
    }

    if(operator === '-'){
        return num1 - num2;
    }

    if(operator === 'x'){
        return num1 * num2;
    }

    if(operator === '/'){
        return num1 / num2;
    }
}

export default operate;