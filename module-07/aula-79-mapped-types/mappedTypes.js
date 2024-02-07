"use strict";
/**
 * arquivo: mappedTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Mapped Types' em TypeScript
 * data: 03/04/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 'nome' | 'endereco' | 'telefone' | 'idade'
const usuarioMapped = {
    nome: 'Cristian Silvera',
    endereco: 'Street 01, 123',
};
console.log(usuarioMapped);
const livro = {
    autor: 'Boris Cherny',
    numeroPaginas: 324,
    preco: 19.99,
    titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
};
// livro.autor = "Cristian Silvera"
