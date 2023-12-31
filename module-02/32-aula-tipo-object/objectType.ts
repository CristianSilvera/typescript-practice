/* eslint-disable prettier/prettier */
/**
 * arquivo: objectType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'object'
 * data: 26/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */



export { };

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object

const pessoa = {
  nome: 'Cristian',
  sobrenome: 'Silvera',
  idade: 35,
  funcao: 'Professional Software Tester'
};

console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Cristian Silvera' }));

// ==> Exemplo 03 -> object nomeados

interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}

console.log(onboarding02({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester' }));

// ==> Exemplo 04 -> object como type alias

type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding03({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester', linguagem: 'JavaScript/Typescript' }));


// ==> Exemplo 05 -> usando optional no object

interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding04({ nome: 'Cristian Silvera', funcao: 'Professional Software Tester', linguagem: 'JavaScript/Typescript' }));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(pessoa: Pessoa05) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email
  );
}

console.log(onboarding05(
  {
    nome: 'Cristian Silvera',
    funcao: 'Professional Software Tester',
    linguagem: 'JavaScript/Typescript',
    email: 'cristiansilveraa@gmail.com'
  }
));

// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'Cristian',
  sobrenome: 'Silvera',
  idade: 35
}

console.log(filha);

// ==> Exemplo 08 -> Tipos de Interseções

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

// Exemplo 09 - Generic Objects

type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: true;
}

const usuario: Usuario = {
  nome: 'Cristian Silvera',
  email: 'cristiansilveraa@gmail.com'
}

const admin: Admin = {
  nome: 'Cristian Silvera',
  email: 'cristiansilveraa@gmail.com',
  admin: true
}

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

/*function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
};*/

// console.log(acessarSistema(usuario));
