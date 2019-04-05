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

/***
 * Function Types
 ***/

// Podemos decirle a typescript si queremos que una variable sea una función
// let sumOrder: Function;

// También podemos ir más allá y decirle que es lo que la función tiene
// que recibir y también decirle que tiene que regresar
let sumOrder: (price: number, quantity: number) => number;
// Al hacer esto podemos precindir de los tipos de dato en la asignación
sumOrder = (price, quantity) => {
  return price * quantity;
};

let total = sumOrder(25, 2);

console.log(`Total: ${sum}`);

/***
 * Function and optional arguments
 ***/

// Si queremos que una función tenga parametros opcioneales en typescript...
// solo hay que agregar el signo de interrogación al argumento
// que queremos marcar como opcional
let sumOrder2: (price: number, quantity?: number) => number;

/***
 * Typed functions and default params
 ***/

// Si queremos asignar valores por defecto a una función si es que el valor no llega
// lo podemos hacer como lo hariamos en javascrit con ES6
sumOrder2 = (price, quantity = 1) => {
  return price * quantity;
};

/***
 * Object Types
 ***/

// Describimos como es que se tiene que ver el objeto
let car: {
  name: string;
  color: string;
  capacity: number;
  turnOnEngine(): string;
};

car = {
  name: "Versa",
  color: "red",
  capacity: 50,
  turnOnEngine() {
    return "engine sound";
  }
};

/***
 * Array Types and Generics
 ***/

// Hay 2 formas de declarar arreglos... de forma primitiva '[]'
let sizes: string[];
sizes = ["small", "medium", "large"];

// con el contructor
// Generics --> Comunies en librerias de terceros
let cars: Array<string> = ["versa", "golf", "vento"];

/***
 * Tuple Types for Arrays
 ***/
// cuando queremos decirle a typescript como es que se tiene que ver un arreglo
// le pasamos los tipos de dato dentro de los corchetes (importa el orden)
let data: [string, number, boolean] = ["red", 20, true];

/********************
 TYPE ALIASES AND ASSERTIONS
 *******************/

/***
 * Type Aliases
 ***/

// Puedes generar un alias para los types si es que lo necesitas para hacer
// tu código más fácil de leer

type Colors = "red" | "blue" | "white" | "black";
type Callback = (color: Colors) => void;

// Los alias o custom types pueden ser exportados para usarlos en cualquier
// parte de la aplicación

let carColor: Colors = "red";
const selectColor: Callback = c => {
  carColor = c;
};

selectColor("blue");

/***
 * Type Assestions
 ***/

// Es una forma de decirle al transpilador que sabemos más del tipo de dato
// que estamos manejando de lo que el transpilador puede

type Taco = { name: string; cost: number; withAll: boolean };

const taco: Taco = { name: "Pastor", cost: 15, withAll: true };

const serialized = JSON.stringify(taco);

function getTacoName(obj: string): string {
  // le decimos a typescriop que el resultado de esta operación
  // es de tipo 'Taco'
  return (JSON.parse(obj) as Taco).name;
}

/********************
 DIVING INTO INTERFACES
 *******************/

/***
 * Creating interfaces
 ***/

// Una interface es un type más poderoso y más adecuando para
// estructuras de datos más complejas

interface Quesadilla {
  price: number;
  large: number;
}

let quesadilla: Quesadilla;

function createQuesadilla(price: number, large: number) {
  return {
    price,
    large
  };
}

quesadilla = createQuesadilla(14, 20);

/***
 * Interfaces with function types
 ***/

interface Quesadillaa {
  price: number;
  sizes: number[];
  getSizes(): number[];
}

let quesadillaa: Quesadillaa;

function createQuesadillaa(price: number, sizes: number[]): Quesadillaa {
  return {
    price,
    sizes,
    getSizes() {
      return this.sizes;
    }
  };
}

quesadillaa = createQuesadillaa(14, [20, 30, 40]);

/***
 * Extending interfaces
 ***/

// Si queremos extender interfaces basta con usar la palabra extends como lo
// hariamos con clases en ES6

interface Animal {
  sound: string;
  playSound(): string;
}

interface Dog extends Animal {
  name: string;
  age: number;
}

let panzer: Dog = {
  name: "panzer",
  age: 7,
  sound: "guof",
  playSound() {
    return this.sound;
  }
};

/***
 * Interfaces and optional properties
 ***/

// Si queremos marcar algun atributo como opcional en nuestra interface
// solo es necesario marcarla con el signo de interrogación

interface example {
  someAttribute?: string; // este es opcional
  otherAttribute: number; // este es necesario
}

/***
 * Interfaces with index signatures
 ***/

// Si queremos darle a una interfaz la capacidad de saber que nuetro objeto
// tendra popiedades dinamicas es necesario indicarlo de la siguiente manera

interface Dynamic {
  // Estamos diciendo que tendremos una llave de tipo string y le asignaremos un valor
  // de tipo string de igual forma
  [key: string]: string;
}

let dynamic: Dynamic = {};

dynamic["someProp"] = "someValue";

/********************
 CLASSES, PROPERTIES AND INHERITANCE
 *******************/

/***
 * Understanding classes and constructors
 ***/
// Las clases en typescript son practicamente lo mismo que en ES6
class SomeClass {
  // le indicamos a typescript como debe lucir la clase
  property: string;
  items: string[];
  constructor(property: string, items = []) {
    this.property = property;
    this.items = items;
  }

  getProperty(item: string) {
    this.items.push(item);
  }
}

/***
 * Public and private members
 ***/

// En typescript tenemos la posibilidad de implementar métodos y propiedades
// publicas y privadas, cosa que no existe en javascript

class PublicAndPriateMembers {
  public items: string[] = [];
  // De esta manera typescript genera la propiedad como privada y la asigan... es decir
  // crea this.name = name
  constructor(private name: string) {}
}

const l = new PublicAndPriateMembers("test");
// si intento acceder a name typescript me manda un error
/* 
    NOTA: Al moment de transpilar a javascript, ya es posible acceder ya que no existen los
    tipos privados
*/
//console.log(l.name);

/***
 * Readonly members
 ***/

class ReadOnlyMembers {
  constructor(readonly name: string) {}
}

let read = new ReadOnlyMembers("read only");
console.log(read.name);

// al ser una propiedad solamente de lectura... si quiero reasignarle un valor
// typescript me mandará un error
// read.name = "other value"
