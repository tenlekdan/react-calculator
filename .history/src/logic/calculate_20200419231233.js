
export default calculate = function(obj, name){

    if(name==='AC'){
        return {
            next: null,
            total: null,
            operation: null,
        }
    }

    if(!isNaN(name)){
        if(obj.operation){
            if(obj.next){
                
            }
        }else if(obj.next){
            return{
                next: obj.next==='0' ? name: obj.next + name,
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
}