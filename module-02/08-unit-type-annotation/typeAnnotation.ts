/* eslint-disable prettier/prettier */
/**
 * file: typeAnnotation.ts
 * description: file responsible for teaching basic concepts about 'Type Annotation'
 * date: 02/16/2021
 * author: Glaucia Lemos
 * documentation reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilation of the file: <Windows/GNU-Linux> CTRL + SHIFT + B -> tsc: build/watch
 * Run this command to have the program monitor the changes.
 * tsc --watch
 */


export { };

// ==> Variáveis [Type Annotations]
let name: string = 'Cristian Silvera';
console.log(name);

// ==> Arrays [Type Annotations]
let animals: string[] = ['Elefante', 'Perro', 'Gato', 'Panda', 'Girafa'];
console.log(animals);

// ==> Objetos [Type Annotations]
let car: {
    name: string;
    year: number;
    price: number;
}
car = {name: 'Toyota Yaris Sedan XS', year: 2019, price: 80000};
console.log(car);

// ==> Functions [Type Annotation]

function multiplicarNum(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNum(2,5));