"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Variáveis [Type Annotations]
let name = 'Cristian Silvera';
console.log(name);
// ==> Arrays [Type Annotations]
let animals = ['Elefante', 'Perro', 'Gato', 'Panda', 'Girafa'];
console.log(animals);
// ==> Objetos [Type Annotations]
let car;
car = { name: 'Toyota Yaris Sedan XS', year: 2019, price: 80000 };
console.log(car);
// ==> Functions [Type Annotation]
function multiplicarNum(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNum(2, 5));
