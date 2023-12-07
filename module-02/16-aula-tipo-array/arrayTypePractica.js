"use strict";
/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Uso de Colchetes:
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object (Objeto Array):
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
// Declara una variable llamada linguagensArray y la inicializa como un array de strings.
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
// Declara una función llamada funcaoLinguagens que toma un array de strings como argumento.
function funcaoLinguagens(linguagens) {
    // Inicia un bucle for que recorrerá el array desde el primer elemento hasta el último.
    for (let i = 0; i < linguagens.length; i++) {
        // Imprime en la consola el elemento del array en la posición i.
        console.log(linguagensArray[i]);
    }
}
// Llama a la función funcaoLinguagens pasando linguagensArray como argumento.
funcaoLinguagens(linguagensArray);
