/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * date: 10/16/2023
 * author: Glaucia Lemos
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows/GNU-Linux> CTRL + SHIFT + B -> tsc: build/watch
 * Run this command to have the program monitor the changes.
 * tsc --watch
 */

// import { log } from "console";

// ==> Exemplo 01

let tareaConcluida: boolean = true;
let tareaPendiente: boolean = false;

console.log(tareaConcluida);
console.log(tareaPendiente);



// ==> Exemplo 02

// let finalizado: boolean = true;
let finalizado: boolean = true;

if (finalizado) {
    console.log('La tarea fué finalizada con éxito!');
    
    
} else {
    console.log('Tarea pendiente!');
    
    
}