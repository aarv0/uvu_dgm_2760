// Document SetUp DOM
document.querySelector('#company').innerText = "Pizza Place"
document.querySelector('header > h2').innerText = "Literal Objects"

let message

const pizza = {
    crust: 'thin',
    size: 'small',
    toppings: 'pepperoni', 
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a pizza on a ${pizza.crust} crust with a ${pizza.toppings} and cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1;
        let topping = 1;
        if(pizza.crust === 'thick'){
            flour *= 2
        }
        if(pizza.size === "large") {
            flour *= 3
            topping *= 2
        }
        // do the same for large property
        message = `You will need to buy ${flour} cups of flour and 1 lb of ${pizza.toppings}.`
        document.querySelector('#feedback').textContent = message
    }
}


document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')


document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

// same thing for toppings and size

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
//hook up the shoppingList method call here

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)

/*let thinButton = document.querySelector('#thin')
thinButton.addEventListener('click', function() {
    return pizza.crust = 'thin'   //console.log('thin chosen')
})*/

/*let buildButton = document.querySelector('#build')
buildButton.addEventListener('click', function () {
    return.pizzabuildPizza()
})*/

