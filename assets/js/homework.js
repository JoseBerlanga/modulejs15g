/**
 *
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

// const letNum = parseInt(prompt('Introduce un numero entre 1 y 100'))
// if (!isNaN(letNum) && letNum > 0 && letNum <= 100) {
//     if (letNum % 2 === 0) {
//         console.log(`${letNum} es par`);
//     } else {
//         console.log(`${letNum} es impar`);
//     }  
// } else {
//     console.log('valor no aceptado');

//     letNum % 2 === 0 ?
//     console.log(`${letNum} es par`) :
//     console.log(`${letNum} es impar`)
// } else {
//     console.error("valor no aceptado")
// }


/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

// const weekDay = prompt('Introduce un dia de la semana')

// switch (weekDay) {
//     case 'LUNES':
//     case 'Lunes':
//     case 'LuNes':
//         console.log(`${weekDay} es el dia 1`);
//         break
//     case "Martes":
//     case "MARTES":
//     case "martes":
//         console.log(`${weekDay} es el dia 2`)
//         break
//     case "Miercoles":
//     case "Miércoles":
//     case "MIÉRCOLES":
//     case "MIERCOLES":
//     case "miercoles":
//     case "miércoles":
//         console.log(`${weekDay} es el dia 3`)
//         break
//     case "Jueves":
//     case "JUEVES":
//     case "jueves":
//         console.log(`${weekDay} es el dia 4`)
//         break
//     case "Viernes":
//     case "VIERNES":
//     case "viernes":
//         console.log(`${weekDay} es el dia 5`)
//         break
//     case "Sabado":
//     case "Sábado":
//     case "SABADO":
//     case "SÁBADO":
//     case "sabado":
//     case "sábado":
//         console.log(`${weekDay} es el dia 6`)
//         break
//     case "Domingo":
//     case "DOMINGO":
//     case "domingo":
//         console.log(`${weekDay} es el dia 7`)
//         break
//     default: 
//         console.error(`Es un día invalido`)
//         break
// }

/**
 *
 * Pedir al usuario 2 numeros
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const numberOne = parseInt(prompt('Introduce tu primer numero'))
const numberTwo = parseInt(prompt('Introduce tu segundo numero'))

if (!isNaN(numberOne) && !isNaN(numberTwo)){

    numberOne === numberTwo ? console.log('Ambos numeros son iguales'):
    numberOne > numberTwo ? console.log(`${numberOne} es el mayor`&& `${numberTwo} es el menor`):
    numberOne < numberTwo ? console.log(`${numberOne} es el menor`&& `${numberTwo} es el mayor`): ""
} else {
    console.log('ALgun valor no es numerico');
}