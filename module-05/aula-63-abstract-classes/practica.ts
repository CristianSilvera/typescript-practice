export {};

abstract class Funcionario {
    constructor(private name: string, private sobrenome: string) {}

    abstract retornarSalario(): number;
    
    get retornarNomeCompleto(): string {
        return `${this.name} ${this.sobrenome}`;

    }
    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salario: ${this.retornarSalario()}`;
    }
}

// const Funcionario = new Funcionario('Cristian', 'Silvera');

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
      super(nome, sobrenome);
    }
  
    retornarSalario(): number {
      return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
      super(nome, sobrenome);
    }
  
    retornarSalario(): number {
      return this.valorHora * this.horasTrabalhadas;
    }
}

const cristianSal = new FuncionarioCLT('Cristian', 'Silvera', 18000);
const joao = new FuncionarioPJ ('Joao', 'Larrama', 50, 160);

console.log(cristianSal.emitirContraCheque());
console.log(joao.emitirContraCheque());
