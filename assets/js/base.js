/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/


const a = parseInt(prompt('Inroduce valor A'))
const b = parseInt(prompt('Inroduce valor B'))
// if(isNaN(a) === false && isNaN(b) === false){
//     if (a > b){
//         console.log(a / b)
//     } else if (a < b){
//         console.log(a + b)
//     } else if (a == b){
//         console.log(a * b)
//     }
// }else {
//     console.log('Introduce solo numeros');
// }

!isNaN(a) && !isNaN(b) ?
    a > b ? console.log(a /b)
    : a < b ? console.log(a + b)
    : a === b ? console.log(a * b)
    : ''
:
console.error('Introduce solo numeros');


//    console.log('tabla del ' + (i+ 3) + '.') 
//    console.log(`tabla del ${i+3}`)
// for(i = 1; i <= 10; i++ ){

//    for(j = 1; j <= 10 ; j++) {
//     console.log(`${i} x ${j} = ${ i * j }`)
//    } 

// }

