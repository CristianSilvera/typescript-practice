"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: objectType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'object'
 * data: 26/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: 'Cristian',
    sobrenome: 'Silvera',
    idade: 35,
    funcao: 'Professional Software Tester'
};
console.log(pessoa);
// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Cristian Silvera' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester', linguagem: 'JavaScript/Typescript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester', linguagem: 'JavaScript/Typescript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Cristian Silvera',
    funcao: 'Professional Software Tester',
    linguagem: 'JavaScript/Typescript',
    email: 'cristiansilveraa@gmail.com'
}));
const filha = {
    nome: 'Cristian',
    sobrenome: 'Silvera',
    idade: 35
};
console.log(filha);
const usuario = {
    nome: 'Cristian Silvera',
    email: 'cristiansilveraa@gmail.com'
};
const admin = {
    nome: 'Cristian Silvera',
    email: 'cristiansilveraa@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
/*function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
};*/
// console.log(acessarSistema(usuario));
