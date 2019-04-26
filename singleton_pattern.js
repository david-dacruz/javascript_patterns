const Singleton = (function(){
    let instance

    function createInstance() {
        const object = new Object({name: 'Object instance'})
        return object
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
})()

const instanceA = Singleton.getInstance()
const instanceB = Singleton.getInstance()

console.log(instanceA)
console.log(instanceA.name)


console.log(instanceA === instanceB)

const element = document.querySelector('.output')
element.textContent = `instanceA === instanceB  >  
                       ${JSON.stringify(instanceA === instanceB)}`