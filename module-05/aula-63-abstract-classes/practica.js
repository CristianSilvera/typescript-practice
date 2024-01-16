"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(name, sobrenome) {
        this.name = name;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.name} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retornarNomeCompleto} - Salario: ${this.retornarSalario()}`;
    }
}
// const Funcionario = new Funcionario('Cristian', 'Silvera');
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const cristianSal = new FuncionarioCLT('Cristian', 'Silvera', 18000);
const joao = new FuncionarioPJ('Joao', 'Larrama', 50, 160);
console.log(cristianSal.emitirContraCheque());
console.log(joao.emitirContraCheque());
