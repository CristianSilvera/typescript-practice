/**
 * Programa que lee un número entero y muestra su sucesor y antecesor: 
 */


// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Por favor, ingrese un número entero: ', (input) => {
//   const numero = parseInt(input);

//   if (!isNaN(numero)) {
//     console.log(`Sucesor: ${numero + 1}`);
//     console.log(`Antecesor: ${numero - 1}`);
//   } else {
//     console.log('La entrada no es un número entero válido.');
//   }

//   rl.close();
// });


const numero = 5; // Reemplaza 5 con el número que desees calcular

const sucesor = numero + 1;
const antecesor = numero - 1;

console.log(`Número: ${numero}`);
console.log(`Sucesor: ${sucesor}`);
console.log(`Antecesor: ${antecesor}`);
