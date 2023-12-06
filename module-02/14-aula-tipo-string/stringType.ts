/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Single Quotes

let nomeCompleto: string = 'Cristian Silvera';
console.log(nomeCompleto);

// ==> Exemplo 02 - Double Quotes

let funcaoEmpresa: string = "Tester";
console.log(funcaoEmpresa);

// ==> Exemplo 03 - Back Ticks

let nomeEmpresa: string = 'CES';

let dadosFuncionario: string = `Seja bem-vinda ${nomeCompleto}! Você será ${funcaoEmpresa} 
    na empresa ${nomeEmpresa}`; 

console.log(dadosFuncionario);
