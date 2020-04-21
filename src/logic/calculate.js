import operate from './operate.js'
const calculate = function (obj, name) {

    if (name === 'AC') {
        return {
            next: null,
            total: null,
            operation: null,
        }
    }

    if (!isNaN(name)) {
        if (obj.operation) {
            if (obj.next) {
                return {
                    next: obj.next + name
                }
            }
            return { next: name };
        } else if (obj.next) {
            return {
                next: obj.next === '0' ? name : obj.next + name,
                total: null
            }
        }

        return {
            next: name,
            total: null
        }
    }

    if (name === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) { // if the number already has decimal then ignore
                return {};
            }
            return {
                next: obj.next + name
            }
        }

        return { next: '0.' }
    }

    if (name === '=') {
        // console.log(obj);
        if (obj.operation && obj.next) {
            return {
                total: operate(obj.total, obj.next, obj.operation).toString(),
                next: null,
                operation: null,
            }
        }
        else {
            return {};
        }
    }

    if (name === '+/-') {
        if (obj.next) {
            return {
                next: -1 * parseFloat(obj.next)
            }
        }
        if (obj.total) {
            return {
                total: -1 * parseFloat(obj.total)
            }
        }

        return {};
    }

    if(name ==='%'){

        if(obj.operation && obj.next){
            const outcome = operate(obj.total, obj.next, obj.operation);
            if(outcome){
                outcome = parseFloat(outcome)
                outcome = outcome/100;
                return {
                    total: outcome.toString(),
                    next: null,
                    operation: null
                }
                
            }
        }
        if(obj.next){
            return {
                next: (obj.next/100).toString()
            }
        }
        return {};

    }

    //operator pressed and one operation already active
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation).toString(),
            operation: name,
            next: null
        }
    }

    //user hasn't typed a number yet
    if (!obj.next) {
        return { operation: name };
    }

    let finalReturn = {
        total: obj.next,
        next: null,
        operation: name
    }
    console.log(`final return `, finalReturn);
    return finalReturn;
}

export default calculate;