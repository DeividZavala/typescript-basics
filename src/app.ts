/***
 * Arrow functions and implicit return
 ***/
const pizzas = [{ name: "Pepperoni", topping: ["pepperoni"] }];
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
console.log(mappedPizzas);

/***
 * Default function parameters
 ***/
function sum(a: number, b: number = 25) {
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
  getName() {
    return this.name;
  }
};
console.log(pizza.getName());
const toppings = ["pepperoni"];
const order = { pizza, toppings };
console.log(order);

/***
 * Rest parameters
 ***/
function sumAll(message: string, ...arr: any[]) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}
console.log(sumAll("Hello!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

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
function Order({ name: pizzaName, toppings: pizzaToppings }: any) {
  return { pizzaName, pizzaToppings };
}
const myOrder = Order(pizza);
const { pizzaName } = Order(pizza);
console.log(myOrder, pizzaName);
const muchMoreToppings = ["cheese", "pepperoni", "bacon"];
const [a, b, c] = muchMoreToppings;
function logToppings([a, b, c]: any) {
  console.log(a, b, c);
}
logToppings(muchMoreToppings);

/********************
    PRIMITIVE TYPES
 *******************/

/***
 *  Number Type
 ***/
const pizzaCost: number = 10;
const pizzaToppings: number = 5;
function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}
const cost = calculatePrice(pizzaCost, pizzaToppings);
console.log(cost);

/***
 * String Type
 ***/
const coupon: string = "pizza25";
function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}
const couponMessage = `Your final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);

/***
 * Boolean Type
 ***/
const pizzaNumber: number = 2;
function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzaNumber)) {
  console.log("You're entitled to a discount");
} else {
  console.log("Order mora than 3 pizzas for a discount");
}

/********************
 SPECIAL TYPES
 *******************/

/***
 * The "Any" Type
 ***/
let dato: any;
dato = 2;
dato = "2";
dato = true;

/***
 * Implicit vs Explicit Types
 ***/

// Son buena idea cuando estamos trabajando con clases
// sencillas donde bien podemos dejar a typescript indeferir
// los tipos de datos que estamos usando
let implicit = 20;

// Los tipos explicitos son buenos para proyectos
// donde se trabaje con muchos programadores o
// cuando queremos tener referencias de nuestro código
// para el futuro
let explicit: string = "20";

/***
 * Void Type
 ***/

// Usado principalmente en funciones cuando esta, no devuelve nada
let activated: boolean = false;

// función impura (modifica variables que no estan dentro de la función)
function toggleActivate(): void {
  activated = !activated;
}

console.log(activated);

/***
 * Union and Literal Types
 ***/

// Permiten indicarles a typescript los posibles tipos de datos o valores
// para una variable en especifico

let pizzaSize: string = "small";

function selectSize(size: "small" | "medium" | "large"): void {
  pizzaSize = size;
}

// Si coloco un valor distinto a los posibles typescript me señala el error
// selectSize("mediumm")

selectSize("medium");
console.log(`El tamao de la pizza es ${pizzaSize}`);
