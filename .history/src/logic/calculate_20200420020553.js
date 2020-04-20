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
        } else if (obj.next) {
            return {
                next: obj.next === '0' ? name : obj.next + name,
                total: null
            }
        }
        else {
            return {
                next: name,
                total: null
            }
        }
    }

    if (name === '=') {
        if (obj.operation && obj.next) {
            return {
                total: operate(name, obj.next, obj.operator).toString(),
                next: null,
                operation: null,
            }
        }
    }

    //operator pressed and one operation already active
    if (obj.operator) {
        return {
            total: operate(obj.total, obj.next, obj.operation).toString(),
            operation: name,
            next: null
        }
    }

    return {
        total: obj.next,
        next: null,
        operation: name
    }
}

export default calculate;