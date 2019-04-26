// Standart module pattern
const UICtrl = (function() {
    
    let text = 'Hello world'

    const changeText = function() {
        const element = document.querySelector('.output')
        element.textContent = text
    }

    return {
        callChangeText: function() {
            changeText()
            console.log(text)
        }
    }

})();

UICtrl.callChangeText()


// Revealing module pattern
const itemCtrl  = (function(){
    let data = []

    function addItem(item) {
        data.push(item)
        console.log('Item added')
    }

    function getItem(id) {
        return data.find(item => {
            return item.id === id 
        })
    }

    return {
        add: addItem,
        get: getItem
    }
})()

itemCtrl.add({id: 1, name: 'John'})
console.log(itemCtrl.get(1))

const element = document.querySelector('.output2')
element.textContent = JSON.stringify(itemCtrl.get(1))