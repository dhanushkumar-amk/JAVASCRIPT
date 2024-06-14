// factory function

function createFunction(name){
    return {
        name : "Dhanush",
        greeting(){
            let msg = `my name is ${this.name}, i love ${this.interest}`;
            console.log(msg);
        }
    }
}