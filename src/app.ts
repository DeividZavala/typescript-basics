/***
 * Arrow functions and implicit return
 ***/
const pizzas = [{name: "Pepperoni", topping:["pepperoni"]}];
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
console.log(mappedPizzas);

/***
* Default function parameters
***/
function sum(a: number, b:number = 25){
    return a * b;
}
console.log(sum(5));
console.log(sum(10, 20));


/***
 * Object literal improvements
 ***/
const pizza = {
    name: "Pepperoni",
    price: 128,
    getName(){
        return this.name
    }
};
console.log(pizza.getName());
const toppings = ["pepperoni"];
const order = { pizza, toppings };
console.log(order);


/***
 * Rest parameters
 ***/
function sumAll(message: string, ...arr:any[]){
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}
console.log(sumAll("Hello!",1,2,3,4,5,6,7,8,9,10));


/***
 * Array spread operator
 ***/
const moreToppings = ["Cheese", "pepper"];
const newToppings = ["onion"];
const mergeToppings = [...newToppings, ...moreToppings];
console.log(mergeToppings);

/***
 * Destructuring arrays and objects
 ***/
function Order({name: pizzaName, toppings: pizzaToppings}: any){
    return {pizzaName, pizzaToppings};
}
const myOrder = Order(pizza);
const { pizzaName } = Order(pizza);
console.log(myOrder, pizzaName);
const muchMoreToppings = ["cheese", "pepperoni", "bacon"];
const [a,b,c] = muchMoreToppings;
function logToppings([a,b,c]:any){
    console.log(a,b,c);
}
logToppings(muchMoreToppings);