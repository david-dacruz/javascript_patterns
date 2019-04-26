function EventObserver() {
    this.observers = []
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn)
        console.log(`You subscribe to miliseconds ${fn.name}`)
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item
            }
        })
        console.log(`You are now unsubscribed from miliseconds ${fn.name}`)
    },
    fire: function() {
        this.observers.forEach(observer => {
            observer.call()
        });
    }
}

const click = new EventObserver()

const sub = document.querySelector('.subscribe-ms')

const unsub = document.querySelector('.unsubscribe-ms')

const fire = document.querySelector('.fire')

const getcurrentMilliseconds = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}
 
sub.addEventListener('click', function() {
    click.subscribe(getcurrentMilliseconds)
})

unsub.addEventListener('click', function() {
    click.unsubscribe(getcurrentMilliseconds)
})

fire.addEventListener('click', function() {
    click.fire()
})