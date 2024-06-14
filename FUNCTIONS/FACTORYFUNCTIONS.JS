// factory function

function createFunction(){
    return {
        name : "Dhanush",
        greeting(){
            let msg = `my name is ${this.name}, i love ${this.intrest}`
        }
    }
}