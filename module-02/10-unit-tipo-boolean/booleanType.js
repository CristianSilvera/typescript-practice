"use strict";
/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * date: 10/16/2023
 * author: Silvera Cristian <cristiansilveraa@gmail.com>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows/GNU-Linux> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01
let tareaConcluida = true;
let tareaPendiente = false;
console.log(tareaConcluida);
console.log(tareaPendiente);
// ==> Exemplo 02
// let finalizado: boolean = true;
let finalizado = false;
if (finalizado) {
    console.log('Tarea fué finalizada con éxito!');
}
else {
    console.log('Tarea pendiente!');
}
